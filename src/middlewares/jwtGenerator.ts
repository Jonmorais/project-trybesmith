import jwt from 'jsonwebtoken';

const jwtConfig = {
  expiresIn: '3d',
};

const SECRET: string | undefined = process.env.JWT_SECRET || '';

const newToken = (data: object = {}) => jwt.sign({ data }, SECRET, jwtConfig);

export default newToken;
