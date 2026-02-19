import { QueryResult, ResultSetHeader } from 'mysql2';
import {pool} from '../database/database';
import { Login, dadosLogin } from '../models/login';
 
async function validateEmail(email: string):Promise<Login|null> {
    const sql = `SELECT
                clientes.id,
                clientes.nome,
                clientes.email,
                clientes.senha,
                cargos.nome AS cargo
                FROM clientes
                INNER JOIN cargos
                ON cargos.id = clientes.fk_cargo
                WHERE clientes.email = ?
                `
                const [rows] = await pool.query<Login[]>(sql, [email]);
                return rows.length ? rows[0] : null;               
}

async function cadastrarLogin(dadosLogin:dadosLogin):Promise<Login|null> {
    const sql =  `INSERT INTO clientes (nome, cpf, email, senha,  telefone) VALUES (?, ?, ?, ?, ?)`;

    const [result] = await pool.query<ResultSetHeader>(sql, [
        dadosLogin.nome,
        dadosLogin.cpf,
        dadosLogin.email,
        dadosLogin.senha,
        dadosLogin.telefone,
    ]);
    if (result.insertId) {
        const resultado:Login = {id:result.insertId, ...dadosLogin}
        return resultado
    }
    return null;    
}
 
export default { validateEmail, cadastrarLogin} 