import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  console.log('Received request body:', JSON.stringify(req.body, null, 2));

  // Validate required fields
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    console.error('Missing required fields:', { name, email, subject, message });
    return res.status(400).json({ error: 'Missing required fields', details: { name, email, subject, message } });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gugub312@gmail.com',
      pass: 'lwsh ixbj qwlo ruaz'
    },
    debug: true // Enable debug logging
  });

  // Verify transporter configuration
  try {
    await transporter.verify();
    console.log('Transporter verified successfully');
  } catch (error) {
    console.error('Transporter verification failed:', error);
    return res.status(500).json({ error: 'Email configuration error', details: error.message });
  }

  const mailOptions = {
    from: {
      name: 'Portfolio Contact Form',
      address: 'gugub312@gmail.com'
    },
    to: 'vasu02062001@gmail.com',
    subject: `Contact Form: ${subject}`,
    text: `
New Contact Form Submission:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
    `.trim(),
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>This message was sent from your portfolio contact form.</em></p>
    `
  };

  try {
    console.log('Attempting to send email with options:', JSON.stringify(mailOptions, null, 2));
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);
    res.status(200).json({ message: 'Message sent successfully!', info });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send message',
      details: error.message,
      code: error.code
    });
  }
});

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
  console.log('Ready to receive contact form submissions');
});
