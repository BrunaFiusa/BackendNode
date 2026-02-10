const URL_LOGIN:string = "http://localhost:3000/api/login"


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
            nome: "nomeTeste",
            email: "teste@email.com",
            senha: "senha123",
            telefone: "157070-7070",
            cpf:"123456789-55"
        })
    });
    expect(res.status).toBe(200);
    const token = await res.json();
    console.log(token)
});