import nodemailer from "nodemailer";

const getEmailUser = () => process.env.EMAIL_USER?.trim();
const getEmailPassword = () => process.env.EMAIL_PASS?.replace(/\s/g, "");
const getWeb3FormsKey = () => process.env.WEB3FORMS_ACCESS_KEY?.trim();

const isEmailConfigured = () =>
  getWeb3FormsKey() ||
  (getEmailUser() &&
    getEmailPassword() &&
    getEmailPassword() !== "paste_your_google_app_password_here");

const getEmailErrorMessage = (error) => {
  if (error.message?.startsWith("Web3Forms failed:")) {
    return error.message;
  }

  if (error.code === "EAUTH" || error.responseCode === 535) {
    return "Gmail rejected the email login. Check EMAIL_USER and EMAIL_PASS on Render.";
  }

  if (
    error.code === "ETIMEDOUT" ||
    error.code === "ECONNECTION" ||
    error.code === "ESOCKET"
  ) {
    return "The email service timed out. Try again, then check Render logs if it continues.";
  }

  return "Failed to send email. Please check the server email settings.";
};

const sendWithWeb3Forms = async ({ name, email, message }) => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: getWeb3FormsKey(),
      subject: `Portfolio Contact from ${name}`,
      from_name: "Portfolio Contact Form",
      name,
      email,
      message,
    }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok || result.success === false) {
    throw new Error(
      `Web3Forms failed: ${result.message || "Check WEB3FORMS_ACCESS_KEY on Render."}`
    );
  }

  return result;
};

const sendWithGmail = async ({ name, email, message }) => {
  const emailUser = getEmailUser();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,

    auth: {
      user: emailUser,
      pass: getEmailPassword(),
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${emailUser}>`,

    to: emailUser,

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
};

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

    if (getWeb3FormsKey()) {
      await sendWithWeb3Forms({ name, email, message });
    } else {
      await sendWithGmail({ name, email, message });
    }

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Contact email failed:", error.message);

    res.status(500).json({
      success: false,
      message: getEmailErrorMessage(error),
    });
  }
};
