import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth-routes.js";
import homeRoutes from "./routes/home-routes.js";
import adminRoutes from "./routes/admin-routes.js";
import imageRoutes from "./routes/image-routes.js";
import { connectToDB } from "./database/db.js";

const PORT = process.env.PORT || 5001;

const app = express();
connectToDB();

app.use(express.json());

app.use("/api/home", homeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/image", imageRoutes);
app.listen(PORT, () =>
  console.log(`Server is now listening  to PORT http://localhost:${PORT}`)
);
