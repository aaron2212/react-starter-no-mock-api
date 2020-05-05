import { API_URL } from 'settings';

export class HttpClient {
  static async makeRequest(request) {
    const response = await fetch(request);

    if (!response.ok && response.type) {
      throw new Error(response.statusText);
    }

    const text = await response.text();

    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  }

  static async doRequest(
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
      case 'PATCH':
        return await HttpClient.patch(fullUrl, headers, body);
      case 'DELETE':
        return await HttpClient.delete(fullUrl, headers);
      default:
        return;
    }
  }

  static async get(endpoint, headers = {}) {
    const request = new Request(endpoint, {
      body: null,
      headers,
      method: 'GET',
      mode: 'cors',
    });

    return await HttpClient.makeRequest(request);
  }

  static async post(endpoint, headers = {}, body = {}) {
    body =
      headers['Content-Type'] &&
      headers['Content-Type'].startsWith('application/json')
        ? JSON.stringify(body)
        : body;
    const request = new Request(endpoint, {
      body,
      headers,
      method: 'POST',
      mode: 'cors',
    });

    return await HttpClient.makeRequest(request);
  }

  static async put(endpoint, headers = {}, body = {}) {
    const request = new Request(endpoint, {
      body: JSON.stringify(body),
      headers,
      method: 'PUT',
      mode: 'cors',
    });

    return await HttpClient.makeRequest(request);
  }

  static async patch(endpoint, headers = {}, body = {}) {
    const request = new Request(endpoint, {
      body: JSON.stringify(body),
      headers,
      method: 'PATCH',
      mode: 'cors',
    });

    return await HttpClient.makeRequest(request);
  }

  static async delete(endpoint, headers = {}) {
    const request = new Request(endpoint, {
      body: null,
      headers,
      method: 'DELETE',
      mode: 'cors',
    });

    return await HttpClient.makeRequest(request);
  }
}
