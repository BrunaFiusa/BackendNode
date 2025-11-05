import express from "express";
import { Request, Response, NextFunction } from "express";

const app = express();

// rota generica
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

//rota de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Erro na requiisção!");
});

export default app;
