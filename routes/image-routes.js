import express from "express";
import {
  deleteImageController,
  fetchImagesController,
  uploadImageController,
} from "../controllers/image-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";
import adminMiddleWare from "../middleware/admin-middleware.js";
import uploadMiddleware from "../middleware/upload-middleware.js";

const router = express.Router();

router.post(
  "/upload",
  authMiddleware,
  adminMiddleWare,
  uploadMiddleware.single("image"),
  uploadImageController
);

router.get("/get", authMiddleware, fetchImagesController);
router.delete("/:id", authMiddleware, adminMiddleWare, deleteImageController);

export default router;
