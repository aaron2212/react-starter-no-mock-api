export class SessionStorageHelper {
  static storeJwt(jsonWebToken) {
    const jwtData = this.stringifySessionData(jsonWebToken);

    localStorage.setItem('token', jwtData);
  }

  static getJwt() {
    const storedJwt = localStorage.getItem('token');

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
    localStorage.removeItem('token');
  }
}
