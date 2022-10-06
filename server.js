const http = require("http");

http
    .createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write(JSON.stringify({
            message: "retornando em JSON"
        }));
        response.end();
    })
    .listen(4001, () => console.log("Servidor rodando na porta 4001"));