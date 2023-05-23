import { urlFormat } from "../schemas/urlsSc.js";

export const validateUrlFormat = (req, res, next) => {
  const { url } = req.body;

  if (!url || url.trim().length === 0) {
    return res.status(422).send('"url" não pode ser vazia');
  }

  const { error } = urlFormat.validate(req.body);

  if (error) {
    res.status(422).send(error.details[0].message);
  } else {
    next();
  }
};
