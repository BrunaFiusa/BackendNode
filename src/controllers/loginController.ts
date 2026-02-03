import { Request, Response, NextFunction } from "express";
import loginRepository from "../repositories/loginRepository";

async function criarLogin(req: Request, res: Response, next: NextFunction) {

  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ erro: "Email e senha são obrigatorios" })
  }

  if (email.trim() === "" || senha.trim() === "") {
    return res.status(400).json({ erro: "Email e senha estão vazios" })
  }

  //Consulta no banco de dados
  try {
    const result = await loginRepository.validateEmail(email);
    if (!result) { throw new Error() }

    console.log(result.email)
    console.log(result.senha)
    return res.sendStatus(200);

  } catch (error) {
    return res.status(400).json({ erro: "Credenciais invalidas!" })
  }
}

export default { criarLogin };