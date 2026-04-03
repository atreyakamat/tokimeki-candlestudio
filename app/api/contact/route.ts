import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Here you would integrate with a real backend service, email provider (e.g. Resend, SendGrid), or database (e.g. Supabase).
    // For now, we simulate a successful submission.

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log(`New contact submission from ${name} (${email}): ${message}`);

    return NextResponse.json({ success: true, message: "Thank you! We have received your message." }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}