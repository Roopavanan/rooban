const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Contact endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic backend validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Set up transporter

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "roopavanan1009@gmail.com",
      pass: "mftn smfe kotk pylc",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Mail options
  let mailOptions = {
    from: email,
    to: "roopavanan1009@gmail.com", 
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
