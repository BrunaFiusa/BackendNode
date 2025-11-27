export default class Tarefa{
  id: number;
  nome: string;
  descricao: string;

  private static proximoId = 1;

  constructor(nome: string, descricao:string){
    this.id = Tarefa.proximoId++;
    this.nome = nome;
    this.descricao = descricao;
  }
}
