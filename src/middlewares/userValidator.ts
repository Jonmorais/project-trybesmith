import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.base': '422|Username must be a string',
    'string.min': '422|Username must be longer than 2 characters',
    'any.required': '400|Username is required',
  }),
  classe: Joi.string().min(3).required().messages({
    'string.base': '422|Classe must be a string',
    'string.min': '422|Classe must be longer than 2 characters',
    'any.required': '400|Classe is required',
  }),
  level: Joi.number().strict().min(1).required()
    .messages({
      'number.base': '422|Level must be a number',
      'number.min': '422|Level must be greater than 0',
      'any.required': '400|Level is required',
    }),
  password: Joi.string().min(8).required().messages({
    'string.base': '422|Password must be a string',
    'string.min': '422|Password must be longer than 7 characters',
    'any.required': '400|Password is required',
  }),
});

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  const { error } = userSchema.validate(user);

  if (error) {
    const [code, message] = error.message.split('|');

    return res.status(Number(code)).json({ error: message });
  }

  next();
};

export default validateUser;
