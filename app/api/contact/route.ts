export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// simple in-memory rate limiter
const requests = new Map<string, { count: number; time: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const max = 5;

  const record = requests.get(ip);

  if (!record) {
    requests.set(ip, { count: 1, time: now });
    return true;
  }

  if (now - record.time > windowMs) {
    requests.set(ip, { count: 1, time: now });
    return true;
  }

  if (record.count >= max) return false;

  record.count += 1;
  return true;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* -------------------------
       1️⃣ ADMIN EMAIL (to you)
    --------------------------*/
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family:Arial,sans-serif">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p>${message}</p>
        </div>
      `,
    });

    /* -------------------------
       2️⃣ USER AUTO-REPLY EMAIL
    --------------------------*/
    await transporter.sendMail({
      from: `"Rooban Portfolio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting me 🙌",
      html: `

      <div style="text-align:center;">
      <img src="https://rooban-portfolio.vercel.app/email.png" width="120" />
      <h2>Thank you for contacting me!</h2>
    </div>
<div style="background:#0f172a;padding:40px 20px;font-family:Arial,sans-serif;">
  <table align="center" width="100%" style="max-width:600px;background:#111827;border-radius:12px;padding:30px;color:#e5e7eb;">
    
    <tr>
      <td style="text-align:center;padding-bottom:20px;">
        <h1 style="margin:0;color:#ffffff;font-size:22px;">
          Rooban Portfolio
        </h1>
        <p style="margin:5px 0 0;color:#9ca3af;font-size:14px;">
          UI/UX • Frontend Developer
        </p>
      </td>
    </tr>

    <tr>
      <td style="padding:10px 0;">
        <h2 style="color:#ffffff;margin:0 0 10px;">
          Thank you for reaching out, ${name}! 🙌
        </h2>

        <p style="color:#d1d5db;line-height:1.6;">
          I’ve received your message and truly appreciate you taking the time to connect.
          I’ll review your enquiry and get back to you as soon as possible.
        </p>
      </td>
    </tr>

    <tr>
      <td style="background:#020617;border-radius:8px;padding:15px;margin-top:15px;">
        <p style="margin:0;color:#9ca3af;font-size:13px;">Your Message:</p>
        <p style="margin:8px 0 0;color:#e5e7eb;">
          "${message}"
        </p>
      </td>
    </tr>

    <tr>
      <td style="padding-top:25px;">
        <a href="https://rooban-portfolio.vercel.app/"
           style="display:inline-block;background:#6366f1;color:white;
           text-decoration:none;padding:12px 18px;border-radius:6px;
           font-size:14px;font-weight:bold;">
          Visit My Portfolio
        </a>
      </td>
    </tr>

    <tr>
      <td style="padding-top:30px;border-top:1px solid #1f2937;">
        <p style="margin:0;color:#9ca3af;font-size:13px;">
          — Rooban<br/>
          Frontend Developer
        </p>
      </td>
    </tr>

  </table>
</div>
`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
