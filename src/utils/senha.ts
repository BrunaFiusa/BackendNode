import bcrypt from 'bcrypt';

const SALT = 10;

async function gerarSenha(senha:string) {
    return bcrypt.hashSync(senha,10);
}

async function validarSenha(senha:string, hashSenha: string) {
    const hash_normal = hashSenha.replace("$2y$", '$2b$');
    return bcrypt.compare(senha, hash_normal);    
}

export { gerarSenha, validarSenha}