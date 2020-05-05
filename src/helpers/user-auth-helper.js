import { SessionStorageHelper } from './session-storage-helper';
import { JwtTokenHelper } from './jwt-token-helper';

export class UserAuthHelper {
  static getUser = () => {
    const token = SessionStorageHelper.getJwt();

    if (token === null || token.token === null) return null;

    return JwtTokenHelper.getJwtObject(token.access);
  };

  static isUserAuthenticated = () => {
    const user = this.getUser();

    if (!user) return null;

    return user;
  };

  static getUserId = () => {
    const user = this.getUser();

    return user ? user.user_id : null;
  };
  static logoutUser = () => SessionStorageHelper.deleteJwt();
}
