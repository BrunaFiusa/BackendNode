test("POST: /api/reserva = 200", async()=>{
    // realizar login
    const res = await fetch("https://backend-node-smoky-nu.vercel.app/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "bru@gmail.com",
            senha: "2511"}
        )
    });
    expect(res.status).toBe(200);
    const token = await res.json()

    // realizar reserva
    const resp = await fetch("https://backend-node-smoky-nu.vercel.app/api/reserva",{
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
        body: JSON.stringify({
            pagamento: "pix",
            quartos: [
                {
                    id: 12,
                    dataInicio: "2026/02/19",
                    dataFim: "2026/02/20",
                },
                {
                    id: 13,
                    dataInicio: "2026/02/19",
                    dataFim: "2026/02/20",
                }

            ]
        })

    });
    expect(resp.status).toBe(200);
    const json = await resp.json()
    console.log(json)
})