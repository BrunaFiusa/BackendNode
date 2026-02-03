import {pool} from '../database/database';
 
async function validateEmail(email: string) {
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
                const [rows] = await pool.query(sql, [email]);
                return rows.length ? rows[0] : null;               
}
 
export default { validateEmail } 