# Swagger API
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = require('./swagger.json');
const swaggerJSDocOptions = {
  swaggerDefinition,
  apis: ['./projects/**/*.js', './components.yaml'],
};

const swaggerSpec = swaggerJSDoc(swaggerJSDocOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

# https in express
const https = require('https');
let options = {
    key: fs.readFileSync(config.filepath.serverKey),
    cert: fs.readFileSync(config.filepath.serverCert),
  };

  server = https.createServer(options, app).listen(port, function() {
  });

