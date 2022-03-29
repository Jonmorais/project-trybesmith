import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    'string.base': '422|Name must be a string',
    'string.min': '422|Name must be longer than 2 characters',
    'any.required': '400|Name is required',
  }),
  amount: Joi.string().min(2).required().messages({
    'string.base': '422|Amount must be a string',
    'string.min': '422|Amount must be longer than 2 characters',
    'any.required': '400|Amount is required',
  }),
});

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  const { error } = productSchema.validate(product);

  if (error) {
    const [code, message] = error.message.split('|');

    return res.status(Number(code)).json({ error: message });
  }

  next();
};

export default validateProduct;
