const express = require("express");
const { randomUUID } = require("crypto");

const app = express();
app.use(express.json()) //middleman

const products = [];

app.get("/products", (request, response) => {
    return response.json(products);
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

app.get("/products/:id", (request, response) => {
    const { id } = request.params;
    const product = products.find((product) => product.id === id);
    return response.json(product);
});

app.put("/products/:id", (request, response) => {
    const { id } = request.params;
    const { name, price } = request.body;
    const productIndex = products.findIndex(product => product.id === id);
    console.log("antes ", products[productIndex]);

    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    };
    console.log("depois ", products[productIndex]);

    return response.json({ message: "Produto alterado com sucesso" });
});

app.listen(4002, () => console.log("Servidor rodando na porta 4002"));