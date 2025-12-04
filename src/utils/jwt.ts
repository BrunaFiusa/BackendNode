import jwt from "jsonwebtoken";

const JWT_SECRET = "senha_secreta"
const DURATION = 60 * 60 * 24

export function createJWT(){
  const payload = {
    id: 123,
    nome: "fulano",
    cargo: "cliente"
  }

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: DURATION,
    algorithm: "HS256"
  })
}
