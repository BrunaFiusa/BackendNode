test("POST: /api/quartosDisponiveis = 200", async()=>{
    const resp = await fetch("https://backend-node-smoky-nu.vercel.app/api/quartosDisponiveis",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            dataInicio:"2026-11-02",
            dataFim:"2026-11-05",
            quantidade:3
        })
    });
    expect(resp.status).toBe(200);
    const json = await resp.json()
    // console.log(json)
})