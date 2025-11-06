import express from "express";
import { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json())

app.get("/parametro/:nome", (req: Request, res: Response, next: NextFunction) => {
  const nome = req.params.nome;
  console.log("Rota de parametro - Cliente digitou: ", nome);
  res.send(`Você digitou o nome: ${nome}`);
});

app.get("/query", (req: Request, res: Response, next: NextFunction) => {
  const nome = req.query.nome;
  console.log("Cliente digitou: ", nome);
  res.send(`Você digitou o nome: ${nome}`);
});

app.get("/corpo", (req: Request, res: Response, next: NextFunction) => {
  const nome = req.body.nome;
  console.log("Variavel dentro do corpo- Cliente digitou: ", nome);
  res.send(`Você digitou o nome: ${nome}`);
});

app.get("/query", (req: Request, res: Response, next: NextFunction) => {
  console.log("Aconteceu algo!");
  res.send(`Rodou tudo serto`);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.send("Erro");
});

export default app;
