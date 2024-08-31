import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { getMessages } from "../controllers/messages.controllers.js";

const router = Router();

router.post("/get-messages", verifyToken, getMessages);

export default router;
