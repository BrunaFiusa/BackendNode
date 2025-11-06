import { Router } from "express";
import tarefaController from "../controllers/tarefaController";

const router = Router();

router.get("/", tarefaController.getTarefas);
router.get("/:id", tarefaController.getTarefa);
router.post("/", tarefaController.criarTarefa);
router.put("/:id", tarefaController.atualizarTarefa);
router.delete("/:id", tarefaController.deletarTarefa);

export default router;
