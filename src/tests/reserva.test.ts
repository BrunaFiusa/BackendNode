test("POST: /api/reserva = 200", async()=>{

});
expect(resp.status).toBe(200);
const token = await resp.json()

//Realizar reserva 
const resp = await fetch("http://localhost:3000/api/reserva",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+token
    },
    body: JSON.stringify({
        pagamento: "pix",
        quartos: [
            {
                id: 1,
                dataInicio: "1902/2026",
                dataFim: "20/02/2026",
            },
            {
                id: 2,
                dataInicio: "1902/2026",
                dataFim: "20/02/2026",
            }
        ]
    })
});
expect(resp.status).toBe(200);
const json = await resp.json()
console.log()