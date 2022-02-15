// import expressSwaggerGenerator from 'express-swagger-generator';
import { createRequire } from 'module';
import app from './app.js';
import { debug, swaggerDoc } from './helpers/index.js';

// const expressSwagger = expressSwaggerGenerator();
const require = createRequire(import.meta.url);
const expressSwagger = require('express-swagger-generator')(app);

app.listen(app.get('port'), () => {
  debug(`App is running at http://localhost:${app.get('port')} on ${app.get('env')} mode`);
});

if (app.get('env') === 'debug') {
  expressSwagger(swaggerDoc(app.get('port')));
}
