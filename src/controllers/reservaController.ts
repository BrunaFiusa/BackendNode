import { Request, Response, NextFunction } from "express";

async function criarPedido(req: Request, res: Response, next: NextFunction) {
    const token = req.body;
    const {pagamento, quartos} = req.body;

    console.log(token.id), token.nome;
    console.log(pagamento)
    console.log(quartos)
    return res.sendStatus(200);    
}

export default{
    criarPedido
}