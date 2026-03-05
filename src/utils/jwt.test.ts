import { verifyJWT } from "../utils/jwt"

const BASE_URL = "https://backend-node-smoky-nu.vercel.app/jwt"

test("GET: /jwt = 200", async()=> {
  const resp = await fetch(BASE_URL)
  expect(resp.status).toBe(200)

  const body = await resp.json()
  expect(typeof body).toBe("string")

  const token = verifyJWT(body)
  expect(typeof token).toBe("object")         
})
