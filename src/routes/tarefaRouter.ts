import { Router } from "express";
import tarefaController from "../controllers/tarefaController";

const rotaTarefa = Router();

rotaTarefa.get("/", tarefaController.getTarefas);
rotaTarefa.get("/:id", tarefaController.getTarefa);
rotaTarefa.post("/", tarefaController.criarTarefa);
rotaTarefa.put("/:id", tarefaController.atualizarTarefa);
rotaTarefa.delete("/:id", tarefaController.deletarTarefa);

export default rotaTarefa;
