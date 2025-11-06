import { Router } from "express";

const router = Router();

router.get("/", ()=>console.log('Pegar todoas as tarefas'));
router.get("/:id", ()=>console.log('Pegar uma tarefa'));
router.post("/", ()=>console.log('Cadastrar uma tarefa'));
router.put("/:id", ()=>console.log('Atualizar uma tarefa'));
router.delete("/:id", ()=>console.log('Deletar uma tarefa'));

export default router;
