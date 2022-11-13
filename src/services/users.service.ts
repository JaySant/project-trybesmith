import jwt from 'jsonwebtoken';
import { IUsers } from '../interfaces/IUsers';
import UsersModel from '../models/users.model';

export default class UsersService {
  public usersModel = new UsersModel();

  public jwt = jwt;

  async createUsers(usersModel: IUsers) {
    const user = await this.usersModel.createUsers(usersModel);
    return this.generateToken(user);
  }

  async generateToken(userModel: IUsers) {
    const payload = { ...userModel };
    return this.jwt.sign(payload, process.env.JWT_SECRET as string, {
      algorithm: 'HS256',
      expiresIn: '1d',
    });
  }
}