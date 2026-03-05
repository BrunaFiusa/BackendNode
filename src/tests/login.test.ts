const URL_LOGIN:string = "https://backend-node-smoky-nu.vercel.app/api/login"


test("POST: / login = 200", async() => {
    const res = await fetch(URL_LOGIN, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: "bru@gmail.com",
            senha: "2511"}
        )
    });
    expect(res.status).toBe(200);
    const json = await res.json()
    console.log(json);
});

test("POST / create = 200", async () => {
    const res = await fetch(URL_LOGIN + "/cadastro" , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nome: "Bruna",
            email: "bruna-.rodrigues@email.com",
            senha: "senha123",
            telefone: "157070-73070",
            cpf:"1234567389-55"
        })
    });
    expect(res.status).toBe(200);
    const token = await res.json();
    console.log(token)
});

test("POST / login(sem senha) = 400", async () => {
    const res = await fetch(URL_LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "teste@email.com",
            senha: ""}
        )
    });
    expect(res.status).toBe(400);
});