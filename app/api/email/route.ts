import nodemailer from 'nodemailer';

export async function POST(req:Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,    
      pass: process.env.EMAIL_PASS,     
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    text: `Email: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (err) {
    console.error('Failed to send email:', err);
    return Response.json({ success: false }, { status: 500 });
  }
}
