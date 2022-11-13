import { Request, Response } from 'express';
import { IUsers } from '../interfaces/IUsers';
import UsersService from '../services/users.service';

export default class UsersController {
  public usersService = new UsersService();

  async createUsers(req: Request<object, object, IUsers>, res: Response): Promise<void> {
    const { body } = req;
    const token = await this.usersService.createUsers(body);
    res.status(201).json({ token });
  }
}