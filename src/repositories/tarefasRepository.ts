import { resolve } from "path";
import Tarefa from "../models/tarefa"

const listaTarefas:Tarefa[] = [];
 
async function getAllTarefas(): Promise<Tarefa[] | any> {
  return new Promise((resolve, reject) => {
    return resolve(listaTarefas)
  })
}

async function getTarefa(id:Number): Promise<Tarefa | any> {
  return new Promise((resolve, reject) => {
    const tarefa = listaTarefas.find(t => t.id === id)
    return resolve(tarefa)
  })
}

async function criarTarefa(dados:Tarefa): Promise<Tarefa> {
  return new Promise((resolve, reject) => {
    if ( !dados.nome || !dados.descricao ){
      return reject( new Error("Dados invalidos"))
    }
    const novaTarefa = new Tarefa(dados.nome, dados.descricao)
    listaTarefas.push(novaTarefa)
    return resolve(novaTarefa)
  })  
}

async function atualizarTarefa(id:Number, dados:Tarefa): Promise<Tarefa> {
  return new Promise((resolve, reject) => {
    const indice = listaTarefas.findIndex(t => t.id === id)
    if (indice === -1){
      return reject(new Error("Tarefa não encontrada"))
    }
    listaTarefas[indice].nome = dados.nome
    listaTarefas[indice].descricao = dados.descricao
    return resolve(listaTarefas[indice])
  })
}

async function deletarTarefa(id:Number): Promise<Tarefa> {
  return new Promise((resolve, reject) => {
    const indice = listaTarefas.findIndex(t => t.id === id)
    if (indice === -1){
      return reject(new Error("Tarefa não existe"))
    }
    const [tarefa] = listaTarefas.splice(indice, 1)
    return resolve(tarefa)
  })
}

export default { getAllTarefas, getTarefa, criarTarefa, atualizarTarefa, deletarTarefa }
