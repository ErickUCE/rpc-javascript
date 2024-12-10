/**
 * @swagger
 * /rpc:
 *   post:
 *     summary: Muestra un mensaje RPC
 *     responses:
 *       200:
 *         description: Muestra "Hi, I am Erick. RPC with JavaScript"
 */

const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

// Swagger Docs Setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'RPC with JavaScript API',
      version: '1.0.0',
      description: 'API documentation for RPC with JavaScript',
    },
  },
  apis: ['./server.js'], // Archivos que contienen las anotaciones de Swagger
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Ruta RPC
app.get('/', (req, res) => {
    res.send('Hi, I am Erick. RPC with JavaScript');
  });
  
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
