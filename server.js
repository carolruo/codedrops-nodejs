const http = require("http");

http
    .createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'text/plain' });

        if (request.url === '/produto') {
            response.end(JSON.stringify({
                message: "Rota de produto"
            }));
        }

        if (request.url === '/usuarios') {
            response.end(JSON.stringify({
                message: "Rota de usuário"
            }));
        }

        response.end(JSON.stringify({
            message: "End?"
        }));
    })
    .listen(4001, () => console.log("Servidor rodando na porta 4001"));