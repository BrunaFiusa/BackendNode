import { RowDataPacket } from "mysql2";

export type Cliente =  RowDataPacket &{
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    cargo: string;
    senha: string;
}