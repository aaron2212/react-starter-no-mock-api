import { SessionStorageHelper } from 'helpers';
import { HttpClient } from './http-client';

export class ApiService {
  headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${SessionStorageHelper.getJwt().access}`,
    'Content-Type': 'application/json; charset=utf-8',
  };

  static instance = new this();
  static getInstance = () => this.instance;

  clients = {
    getAll: () => HttpClient.doRequest('GET', '/clients', null, this.headers),
  };
}
