const URL_LOGIN:string = "http://localhost:3000/api/login"

const novo_login = {
  email: "bru@gmail.com",
  password: "123"
}

test("POST: /api/login = 201(Criar tarefa)", async() => {
    const res = await fetch(URL_LOGIN, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(novo_login)
    }) 
    expect(res.status).toBe(201);
})