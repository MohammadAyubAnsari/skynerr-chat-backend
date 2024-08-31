import { Router } from "express";
import {
  addProfileImage,
  getUserInfo,
  Login,
  logout,
  removeProfileImage,
  signUp,
  updateProfile,
} from "../controllers/auth.controllers.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import multer from "multer";

const router = Router();
const upload = multer({ dest: "uploads/profiles/" });

router.post("/signup", signUp);
router.post("/login", Login);
router.get("/user-info", verifyToken, getUserInfo);
router.post("/update-profile", verifyToken, updateProfile);
router.post(
  "/add-profile-image",
  verifyToken,
  upload.single("profile-image"),
  addProfileImage
);
router.delete("/remove-profile-image", verifyToken, removeProfileImage);
router.post("/logout", logout);

export default router;
