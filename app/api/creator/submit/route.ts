import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  "https://uhkfooojytjesnvqrtxx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoa2Zvb29qeXRqZXNudnFydHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MTcxNjUsImV4cCI6MjA5MDQ5MzE2NX0.4encvmPhZ1uL2EIT4BEYu0LBjGYxJvUW4KfKHsjGhLQ"
);

const resend = new Resend("re_Po7ZvpkS_PBzPLvcaGFc8b7DSEaZWCpCA");

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const category = formData.get("category") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const whats_included = formData.get("whats_included") as string;
    const tags = formData.get("tags") as string;
    const email = formData.get("email") as string;
    const paypal_email = formData.get("paypal_email") as string;

    // Validate required fields
    if (!name || !category || !description || !price || !email || !paypal_email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Insert into Supabase
    const { data, error: dbError } = await supabase
      .from("creator_submissions")
      .insert({
        name,
        category,
        description,
        price: parseFloat(price),
        whats_included,
        tags,
        email: email.toLowerCase().trim(),
        paypal_email: paypal_email.toLowerCase().trim(),
        status: "pending",
        submitted_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (dbError) {
      console.error("Supabase error:", dbError);
      // Continue even if DB fails - still send the email
    }

    // Send notification email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      replyTo: "toby@MyAIWorkforce.ai",
      to: "toby@MyAIWorkforce.ai",
      subject: `🆕 New Creator Submission: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FFD700;">New Creator Submission</h2>
          <p>A new AI agent has been submitted for review on My AI Workforce.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Agent Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Category</td><td style="padding: 8px 0;">${category}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Price</td><td style="padding: 8px 0;">$${price} USD</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Creator Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">PayPal Email</td><td style="padding: 8px 0;">${paypal_email}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Tags</td><td style="padding: 8px 0;">${tags || "—"}</td></tr>
          </table>

          <h3 style="margin-top: 24px;">Description</h3>
          <p style="color: #444;">${description}</p>

          <h3>What&apos;s Included</h3>
          <p style="color: #444;">${whats_included}</p>

          ${data?.id ? `<p style="margin-top: 24px; color: #888; font-size: 12px;">Submission ID: ${data.id}</p>` : ""}
          
          <hr style="margin-top: 32px; border: none; border-top: 1px solid #eee;" />
          <p style="color: #888; font-size: 12px;">My AI Workforce Creator Program</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Creator submit error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
