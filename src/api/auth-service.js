export class AuthService {
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  };

  static instance = new this();
  static getInstance = () => this.instance;
}
