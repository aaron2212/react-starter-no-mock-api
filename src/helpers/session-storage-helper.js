import { LOCAL_STORAGE_TOKEN_KEY } from 'settings';

export class SessionStorageHelper {
  static storeJwt(jwt) {
    const jwtData = JSON.stringify(jwt);

    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, jwtData);
  }

  static getJwt() {
    const storedJwt = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

    if (!storedJwt) {
      return {
        refreshToken: null,
        token: null,
      };
    }

    try {
      const currentJwt = JSON.parse(storedJwt);

      return currentJwt;
    } catch (err) {
      return null;
    }
  }

  static deleteJwt() {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  }
}
