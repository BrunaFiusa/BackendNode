import {pool} from '../database/database';
import { Cliente } from '../models/cliente';
 
async function criarCliente(email: string):Promise<Cliente|null> {
    const sql = `INSERT INTO clientes
                ("nome", "cpf", "telefone", "email", "fk_cargo", "senha") 
                VALUES 
                (?, ?, ?, ?, ?, ?)
                `
    const [rows] = await pool.query<Cliente[]>(sql, [email]);
    return rows.length ? rows[0] : null;               
}
 
export default { criarCliente } 
