
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import ToysRouter from "./routes/toy.routes.js";

import userRouter from "./routes/user.routes.js";

const app = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static images
app.use("/images", express.static("public/images"));

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1", ToysRouter);

export { app };
