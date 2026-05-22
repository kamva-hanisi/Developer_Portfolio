import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import contactRoutes from "./routes/contactRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

const normalizeOrigin = (origin) => {
  if (!origin) {
    return undefined;
  }

  try {
    return new URL(origin).origin;
  } catch {
    return origin.replace(/\/$/, "");
  }
};

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://kamva-hanisi.github.io",
  normalizeOrigin(process.env.CLIENT_URL),
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(normalizeOrigin(origin))) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "OK",
  });
});

app.get("/api/config", (req, res) => {
  res.status(200).json({
    success: true,
    emailConfigured: Boolean(
      process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
        (process.env.EMAIL_USER?.trim() && process.env.EMAIL_PASS?.trim())
    ),
    web3FormsConfigured: Boolean(process.env.WEB3FORMS_ACCESS_KEY?.trim()),
    gmailConfigured: Boolean(
      process.env.EMAIL_USER?.trim() && process.env.EMAIL_PASS?.trim()
    ),
    clientUrl: normalizeOrigin(process.env.CLIENT_URL),
    allowedOrigins,
  });
});

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
