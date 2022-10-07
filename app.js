const express = require("express");
const { randomUUID } = require("crypto");

const app = express();
app.use(express.json()) //middleman

const products = [];

app.get("/rota-get", (request, response) => {
    return response.send("Acessou a primeira rota com nodemon");
});

app.post("/products", (request, response) => {

    const { name, price } = request.body;

    const product = {
        id: randomUUID(),
        name,
        price
    }

    products.push(product);

    return response.json(product);
});

app.listen(4002, () => console.log("Servidor rodando na porta 4002"));