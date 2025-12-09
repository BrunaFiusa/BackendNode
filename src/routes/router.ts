import {Router} from "express";
import rotaTarefa from "./tarefaRouter";
import { createJWT } from "../utils/jwt";
import { middleware } from "./jwtMiddleware"

const handlerRouter = Router();

// rotas publicas
handlerRouter.use("/tarefas", rotaTarefa);

handlerRouter.use("/jwt", (req, res) =>{
  const payload = {
      id: 123,
      nome: "fulano",
      cargo: "cliente"
    }
  res.json(createJWT(payload))
})

// rotas privadas
handlerRouter.get("/testeJWT", middleware, (req, res)=>{
  res.json("passou pelo JWT middleware")
})

export default handlerRouter
