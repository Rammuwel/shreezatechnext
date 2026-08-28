import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();
    const { 
      firstName, 
      lastName, 
      phone, 
      email, 
      jobTitle, 
      companyName, 
      website, 
      city, 
      service, 
      message 
    } = data;

    // Validate inputs
    if (!firstName || !email) {
      return NextResponse.json({ error: 'First name and email are required' }, { status: 400 });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 465,
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 1. Admin Notification Email (Sent to you)
    const adminMailOptions = {
      from: `"${firstName} ${lastName || ''}" <${process.env.SMTP_USER}>`, 
      replyTo: email,
      to: process.env.SMTP_USER,
      subject: `🔥 New Lead from Website: ${firstName} ${lastName || ''}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6; padding: 40px 0; margin: 0;">
          <div style="max-w-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <div style="background-color: #0A3A7A; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">NEW CONTACT INQUIRY</h1>
              <p style="color: #b0c4de; margin: 10px 0 0 0; font-size: 14px;">You have a new message from the Shreezatech website</p>
            </div>

            <!-- Content -->
            <div style="padding: 30px;">
              <h2 style="color: #333333; font-size: 20px; border-bottom: 2px solid #eeeeee; padding-bottom: 10px; margin-top: 0;">Lead Details</h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555; width: 35%;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #222222;">${firstName} ${lastName || ''}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;"><a href="mailto:${email}" style="color: #0A3A7A; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #222222;">${phone || '<i>Not provided</i>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555;">Company</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #222222;">${companyName || '<i>Not provided</i>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555;">Job Title</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #222222;">${jobTitle || '<i>Not provided</i>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555;">Website</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #222222;">${website || '<i>Not provided</i>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555;">City</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #222222;">${city || '<i>Not provided</i>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; font-weight: 600; color: #555555;">Service Interest</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #222222; text-transform: capitalize;">${service || '<i>Not provided</i>'}</td>
                </tr>
              </table>

              <h2 style="color: #333333; font-size: 20px; border-bottom: 2px solid #eeeeee; padding-bottom: 10px; margin-top: 30px;">Message</h2>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; border-left: 4px solid #D4AF37; margin-top: 15px; color: #444444; line-height: 1.6; font-size: 15px;">
                ${message ? message.replace(/\\n/g, '<br>') : '<i>No message provided.</i>'}
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eeeeee;">
              <p style="color: #999999; font-size: 12px; margin: 0;">This is an automated notification from the Shreezatech website.</p>
            </div>

          </div>
        </div>
      `,
    };

    // 2. Client Auto-Responder Email (Sent to the client)
    const clientMailOptions = {
      from: `"Shreezatech" <${process.env.SMTP_USER}>`, 
      to: email, // Send back to the user who filled the form
      subject: `Thank you for contacting Shreezatech`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6; padding: 40px 0; margin: 0;">
          <div style="max-w-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <div style="background-color: #ffffff; padding: 30px 30px 10px 30px; text-align: center; border-bottom: 3px solid #0A3A7A;">
              <h1 style="color: #0A3A7A; margin: 0; font-size: 28px; letter-spacing: 2px;">SHREEZA<span style="color: #D4AF37;">TECH</span></h1>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #222222; font-size: 22px; margin-top: 0; margin-bottom: 20px;">Hello ${firstName},</h2>
              
              <p style="color: #555555; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Thank you for reaching out to us! We have successfully received your inquiry and our team is already reviewing it.
              </p>
              
              <p style="color: #555555; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                One of our technology experts will get back to you within <strong>24 business hours</strong> to discuss how we can help you achieve your goals.
              </p>

              <div style="text-align: center; margin: 40px 0;">
                <a href="https://shreezatech.com" style="background-color: #0A3A7A; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 4px; font-weight: 600; font-size: 16px; display: inline-block;">Visit Our Website</a>
              </div>
              
              <p style="color: #555555; font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
                Best Regards,
              </p>
              <p style="color: #222222; font-size: 16px; font-weight: 600; line-height: 1.6; margin-top: 0;">
                The Shreezatech Team
              </p>
            </div>

            <!-- Footer -->
            <div style="background-color: #0A3A7A; padding: 30px; text-align: center;">
              <p style="color: #b0c4de; font-size: 13px; margin: 0; line-height: 1.5;">
                Shreezatech - Consulting & Software Solutions<br/>
                Empowering businesses with modern technology.
              </p>
              <p style="color: #8fa8cc; font-size: 12px; margin: 15px 0 0 0;">
                Please do not reply directly to this automated email.
              </p>
            </div>

          </div>
        </div>
      `,
    };

    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
