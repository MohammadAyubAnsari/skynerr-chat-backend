import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import contactRoutes from "./routes/contacts.routes.js";
import messagesRoutes from "./routes/messages.routes.js";
import setupSocket from "./socket.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5007;
const MONGO = process.env.MONGO;

app.use(
  cors({
    origin: [process.env.FRONT_END_URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use("/uploads/profiles", express.static("uploads/profiles"));

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/messages", messagesRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

setupSocket(server);

mongoose
  .connect(MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
