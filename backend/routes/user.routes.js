import { Router } from "express";
import { registerUser } from "../controllers/users.controller.js";


const router = Router();

router.route("/register").post(registerUser);
// router.route("/register").post(registerUser)
// router.route("/login").post(Login)

export default router;