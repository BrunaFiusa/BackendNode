import { Request, Response, NextFunction } from "express";

async function criarLogin(req:Request, res:Response, next:NextFunction){
  try{
    console.log("Login efetuado com sucesso!")
    console.log(req.body)
    return res.sendStatus(201) 
  }catch(error){
    console.log("Erro ao criar login", error)
    return res.status(400).json({erro: "Dados incompletos"})
  }
}

export default {criarLogin};