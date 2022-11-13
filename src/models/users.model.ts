import { ResultSetHeader } from 'mysql2';
import { IUsers } from '../interfaces/IUsers';
import connection from './connection';

export default class UsersModel {
  public connection = connection;
 
  async createUsers(user: IUsers): Promise<IUsers> {
    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES(?,?,?,?)', 
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}