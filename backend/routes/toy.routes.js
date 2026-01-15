import express from "express";
import { getToysByAge } from "../controllers/toy.controller.js";

const router = express.Router();

// FINAL API ENDPOINT
// GET /api/v1/age/0-1
router.get("/age/:range", getToysByAge);

export default router;
