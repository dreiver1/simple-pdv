import { Router } from 'express';

const wellcomeRouter = Router();

wellcomeRouter.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Simple PDV</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              margin: 50px;
            }
            h1 {
              color: #4CAF50;
            }
            p {
              color: #555;
            }
            a {
              color: #4CAF50;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <h1>Bem-vindo ao Simple PDV!</h1>
          <p>Este é um sistema de ponto de venda simples desenvolvido com Node.js e TypeScript.</p>
          <p>Confira a <a href="/api-docs">documentação da API</a> para mais detalhes.</p>
        </body>
        </html>
      `);
});

export default wellcomeRouter;