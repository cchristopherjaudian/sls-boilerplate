import { Author } from '@prisma/client';
import PrismaConnect from '../../database/prisma-connection';

class AuthorRepository {
  private _conn = PrismaConnect.db;

  public async create(payload: Author) {
    return await this._conn.author.create({
      data: payload,
    });
  }
}

export default AuthorRepository;
