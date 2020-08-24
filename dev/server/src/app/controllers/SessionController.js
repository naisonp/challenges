import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { login, password } = req.body;

    try {
      const user = await User.findOne({ login }).select('+password');

      if (!user) {
        return res.status(401).json({ mensage: 'login inválido' });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ mensage: 'Senha inválida' });
      }

      const { _id } = user;

      return res.json({
        user: { _id, login },
        token: jwt.sign({ _id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });

    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: true,
        message: 'Erro ao se autenticar',
        type: 'error'
      });

    }
  }
}
export default new SessionController();
