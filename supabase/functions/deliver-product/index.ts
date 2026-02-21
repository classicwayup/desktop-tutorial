import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const STRIPE_WEBHOOK_SECRET = Deno.env.get("STRIPE_WEBHOOK_SECRET") ?? "";

Deno.serve(async (req) => {
  try {
    const body = await req.text();
    const event = JSON.parse(body);

    // ── Stripe webhook handler (activated when Stripe is connected) ──────────
    if (STRIPE_WEBHOOK_SECRET) {
      // Verify Stripe signature
      const sig = req.headers.get("stripe-signature") ?? "";
      // Signature verification requires Stripe SDK — stubbed until Stripe is live
      if (!sig) {
        return new Response("Missing stripe-signature", { status: 400 });
      }
    }

    // ── Manual trigger for testing (remove STRIPE_WEBHOOK_SECRET guard above in prod) ──
    const { product_slug, customer_email } = event;

    if (!product_slug || !customer_email) {
      return new Response(
        JSON.stringify({ error: "product_slug and customer_email are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1. Look up product
    const { data: product, error: productError } = await supabase
      .from("products")
      .select("*")
      .eq("slug", product_slug)
      .eq("active", true)
      .single();

    if (productError || !product) {
      return new Response(
        JSON.stringify({ error: "Product not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2. Record the purchase
    const { data: purchase, error: purchaseError } = await supabase
      .from("purchases")
      .insert({
        product_id: product.id,
        customer_email,
        stripe_session_id: event.stripe_session_id ?? null,
        amount_paid_cents: product.price_cents,
      })
      .select()
      .single();

    if (purchaseError || !purchase) {
      console.error("Purchase insert error:", purchaseError);
      return new Response(
        JSON.stringify({ error: "Failed to record purchase" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // 3. Create download token (48-hour expiry)
    const tokenBytes = new Uint8Array(32);
    crypto.getRandomValues(tokenBytes);
    const token = Array.from(tokenBytes).map((b) => b.toString(16).padStart(2, "0")).join("");

    const { data: tokenRow, error: tokenError } = await supabase
      .from("download_tokens")
      .insert({ purchase_id: purchase.id, token })
      .select()
      .single();

    if (tokenError || !tokenRow) {
      console.error("Token insert error:", tokenError);
      return new Response(
        JSON.stringify({ error: "Failed to create download token" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // 4. Generate signed download URL (48 hours)
    const { data: signedUrl, error: urlError } = await supabase.storage
      .from("products")
      .createSignedUrl(product.file_path, 60 * 60 * 48);

    if (urlError || !signedUrl) {
      console.error("Signed URL error:", urlError);
      return new Response(
        JSON.stringify({ error: "Failed to generate download URL" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // 5. Send email via Resend
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FloStead <noreply@flostead.com>",
        to: [customer_email],
        subject: `Your download: ${product.name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Your download is ready</h2>
            <p>Thank you for your purchase of <strong>${product.name}</strong>.</p>
            <p>
              <a href="${signedUrl.signedUrl}"
                 style="background:#000;color:#fff;padding:12px 24px;text-decoration:none;border-radius:6px;display:inline-block;">
                Download Now
              </a>
            </p>
            <p style="color:#666;font-size:14px;">
              This link expires in 48 hours. If you need a new link, submit a support ticket at
              <a href="https://flostead.com/faq">flostead.com/faq</a>.
            </p>
            <hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
            <p style="color:#999;font-size:12px;">FloStead · flostead.com</p>
          </div>
        `,
      }),
    });

    if (!emailRes.ok) {
      const emailErr = await emailRes.text();
      console.error("Resend error:", emailErr);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        purchase_id: purchase.id,
        token: tokenRow.token,
        expires_at: tokenRow.expires_at,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("Unhandled error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
