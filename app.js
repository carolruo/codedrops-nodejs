const express = require("express");

const app = express();

app.get("/rota-get", (request, response) => {
    return response.send("Acessou a primeira rota");
});

app.listen(4002, () => console.log("Servidor rodando na porta 4002"));