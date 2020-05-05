import { LOCALSTORAGE_TOKEN_KEY } from 'settings';

export class SessionStorageHelper {
  static storeJwt(jsonWebToken) {
    const jwtData = this.stringifySessionData(jsonWebToken);

    localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, jwtData);
  }

  static getJwt() {
    const storedJwt = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    if (!storedJwt) {
      return {
        refreshToken: null,
        token: null,
      };
    }

    try {
      const currentJwt = this.parseSessionData(storedJwt);

      return currentJwt;
    } catch (err) {
      return null;
    }
  }

  static parseSessionData(data) {
    return JSON.parse(data);
  }

  static stringifySessionData(data) {
    return JSON.stringify(data);
  }

  static deleteJwt() {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
  }
}
