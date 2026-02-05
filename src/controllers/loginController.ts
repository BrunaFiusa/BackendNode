import { Request, Response, NextFunction } from "express";
import loginRepository from "../repositories/loginRepository";
import { validarSenha } from "../utils/senha";
import { createJWT } from "../utils/jwt";

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
    if (!result) { throw new Error("Login incorreto")}

    // validar senha do login
    const isValidPasswork = await validarSenha(senha, result.senha);
    if (!isValidPasswork) { throw new Error("Senha invalida")}

    // remover senha do objeto
    const {senha:_senha, ...usuario} = result

    // criar o token do usuario
    const token = createJWT(usuario)
    return res.status(200).json(token);

  } catch (error) {
    return res.status(400).json({ erro: "Credenciais invalidas!" })
  }
}

export default { criarLogin };