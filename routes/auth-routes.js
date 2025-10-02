import express from "express";
import {
  loginUser,
  registerUser,
  getAllUsers,
  changePassword,
} from "../controllers/auth-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";

const router = express.Router();

router.get("/users", authMiddleware, getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/change-password", authMiddleware, changePassword);

export default router;
