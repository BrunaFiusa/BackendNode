import { RowDataPacket } from "mysql2";
 
export type Quartos = RowDataPacket & {
    id: number,
    pedido_id: number,
    quarto_id: number,
    adicional_id: number,
    disponivel: boolean;
    inicio: Date,
    fim: Date;
}
 
export type QuartoReserva = {
    dataInicio: string
    dataFim: string
    quantidade: string
}