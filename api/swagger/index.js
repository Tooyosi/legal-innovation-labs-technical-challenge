const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  apis: [`${__dirname.replace(/swagger/g, "")}routes/**/*.js`],
  basePath: '/',
  host: `${process.env.IP}:${process.env.PORT}`,
  schemes: ['http', 'https'],
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog Api',
      version: '1.0.0',
    },
  },
};
const specs = swaggerJsdoc(options);
module.exports = specs;