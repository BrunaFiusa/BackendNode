import { Router } from "express";
import loginController from "../controllers/loginController";

const rotaLogin = Router();

rotaLogin.post("/", loginController.criarLogin);

export default rotaLogin; 