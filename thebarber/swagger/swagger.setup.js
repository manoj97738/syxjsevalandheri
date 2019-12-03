const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDocument = require('./swagger');

const swaggerJSDocOptions = {
  swaggerDocument,
  apis: ['./projects/**/*.js', './components.yaml'],
};

const swaggerSpec = swaggerJSDoc(swaggerJSDocOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));