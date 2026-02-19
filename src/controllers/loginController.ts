import { Request, Response, NextFunction } from "express";
import loginRepository from "../repositories/loginRepository";
import { gerarSenha, validarSenha } from "../utils/senha";
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

async function cadastroCliente(req: Request, res: Response, next: NextFunction) {
  const {nome, email, senha, cpf, telefone} = req.body;

  if (!nome || !email || !senha || !cpf || !telefone) {
    return res.status(400).json({erro: "Todos os campos são obrigatorios!"})
  }
  if (nome.trim()==="" || email.trim()==="" || senha.trim()==="" || cpf.trim()==="" || telefone.trim()===""){
    return res.status(400).json({erro: "Os campos não podem ser vazios!"})
  }

  try {
    const senhaHash = await gerarSenha(senha);
    const dadosLogin = {nome, email, senha:senhaHash, cpf, telefone}
    const result = loginRepository.cadastrarLogin(dadosLogin)

    if (!result){throw new Error("Erro na criação do login")}
    const { senha:_, ...usuario } = result    
    const token = createJWT(usuario)
    return res.status(200).json(token);
  } 
  catch (error) {
    console.log("Error", error)
    return res.status(400).json({erro: "Erro ao criar Login"})
  }
}

export default { criarLogin, cadastroCliente };