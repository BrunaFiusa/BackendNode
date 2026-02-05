const URL_LOGIN:string = "http://localhost:3000/api/login"

test("POST: /api/login = 200", async() => {
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