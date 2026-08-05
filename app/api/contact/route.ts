import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'hasan@socialmediastrategist.net';

    // Send notification email to the admin
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Update this to your verified domain e.g., 'noreply@socialmediastrategist.net'
      to: recipientEmail,
      subject: `🔔 New Contact Form Submission — ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service:</strong> ${service || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    // Send auto-reply to the visitor
    await resend.emails.send({
      from: 'Abul Hasan <onboarding@resend.dev>', // Update this to your verified domain e.g., 'hello@socialmediastrategist.net'
      to: email,
      subject: `Got your message! I'll be in touch soon — Abul Hasan`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! I've received your message and will reply within 24 hours.</p>
        <p>Best regards,<br/>Abul Hasan<br/>Social Media Strategist</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
