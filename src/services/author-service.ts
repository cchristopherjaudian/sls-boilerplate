import AuthorRepository from '../repositories/author-repository';

class AuthorService {
  private _repo;

  constructor() {
    this._repo = new AuthorRepository();
  }
}

export default AuthorService;
