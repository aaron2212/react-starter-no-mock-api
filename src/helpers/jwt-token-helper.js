export class JwtTokenHelper {
  static JwtClaimType =
    'http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata';

  static getJwtObject(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jwtObject = JSON.parse(window.atob(base64));

      return JSON.parse(jwtObject[this.JwtClaimType]);
    } catch (err) {
      return null;
    }
  }
}
