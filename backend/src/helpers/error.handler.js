import { isCelebrateError } from 'celebrate';

const errorHandler = (req, res, err) => {
  if (isCelebrateError(err)) {
    const body = err.details.get('body');
    const params = err.details.get('params');
    res
      .status(400)
      .send({ body: body && body.details, params: params && params.details });
  } else {
    if (typeof err === 'function') {
      err();
    }
    res.status(req.status).send(err);
  }
};

export default errorHandler;
