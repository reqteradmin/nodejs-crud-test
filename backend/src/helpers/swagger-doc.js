/* eslint-disable no-underscore-dangle */
import path from 'path';

const __dirname = path.resolve();

const swaggerDoc = (port) => ({
  swaggerDefinition: {
    info: {
      description: 'Swagger Doc for Scan Document',
      title: 'Scan Document',
      version: '1.0.0',
    },
    host: `localhost:${port}`,
    basePath: '/',
    produces: ['application/json'],
    schemes: ['http'],
  },
  basedir: __dirname,
  files: ['../routers/*.router.js'],
});

export default swaggerDoc;
