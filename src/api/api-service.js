import { HttpClient } from './http-client';
import { API_URL } from 'settings';
import { SessionStorageHelper } from 'helpers';

export class ApiService {
	headers = {
		Accept: 'application/json',
		Authorization: `Bearer ${SessionStorageHelper.getJwt().access}`,
		'Content-Type': 'application/json; charset=utf-8',
	};

	static instance = new this();
	static getInstance = () => this.instance;

	async doRequest(
		method,
		url,
		body = null,
		headers = this.headers,
		addTrailingSlash = true
	) {
		if (url.startsWith('/')) url = url.substring(1, url.length);
		if (!url.endsWith('/') && addTrailingSlash) url += '/';

		const fullUrl = `${API_URL}/${url}`;
		method = method.toUpperCase();

		switch (method) {
			case 'GET':
				return await HttpClient.get(fullUrl, headers);
			case 'POST':
				return await HttpClient.post(fullUrl, headers, body);
			case 'PUT':
				return await HttpClient.put(fullUrl, headers, body);
			case 'DELETE':
				return await HttpClient.delete(fullUrl, headers);
			default:
				return;
		}
	}
}
