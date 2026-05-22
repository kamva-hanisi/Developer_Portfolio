import nodemailer from "nodemailer";

const isEmailConfigured = () =>
  process.env.EMAIL_USER?.trim() &&
  process.env.EMAIL_PASS?.trim() &&
  process.env.EMAIL_PASS.trim() !== "paste_your_google_app_password_here";

export const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    if (!isEmailConfigured()) {
      return res.status(500).json({
        success: false,
        message: "Email is not configured on the server.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,

      auth: {
        user: process.env.EMAIL_USER.trim(),
        pass: process.env.EMAIL_PASS.replace(/\s/g, ""),
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER.trim()}>`,

      to: process.env.EMAIL_USER.trim(),

      replyTo: email,

      subject: `Portfolio Contact from ${name}`,

      text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Contact email failed:", error.message);

    res.status(500).json({
      success: false,
      message:
        "Failed to send email. Please check the server email settings.",
    });
  }
};
