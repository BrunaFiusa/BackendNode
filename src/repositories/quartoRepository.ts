import {pool} from "../database/database";
import {Quartos} from "../models/quarto";
import { RowDataPacket } from "mysql2";
 
async function quartosDisp(inicio: string, fim: string, qtdPessoas: number) {
    const sql = `
        SELECT
            q.id,
            q.nome,
            q.qtd_cama_casal,
            q.qtd_cama_solteiro,
            q.preco,
            q.disponivel
        FROM
            quartos q
        WHERE
            q.id NOT IN (
                SELECT
                r.quarto_id
                FROM
                reservas r
                WHERE
                (r.inicio < ? AND r.fim > ?)
            )
        AND
            q.disponivel = true
        AND
            ( (q.qtd_cama_casal * 2) + q.qtd_cama_solteiro ) >= ?;
    `;
 
    const [rows] = await pool.query<Quartos[]>(sql, [fim, inicio, qtdPessoas])
    return rows;
}
 
  async function buscarFotoId(id: number) {
    const sql = `SELECT F.nome
        FROM quartos_fotos QF
        JOIN fotos F ON QF.foto_id = F.id
        WHERE QF.quarto_id = ?`;
 
    const [fotos] = await pool.query<RowDataPacket[]>(sql, [id])
    return fotos.map(foto => (foto.nome))
}
 
export default {
    quartosDisp, buscarFotoId
}