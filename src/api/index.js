const BASE_URL = process.env.REACT_APP_API_URL || '';

async function request(url, options = {}) {
  try {
    const res = await fetch(BASE_URL + url, options);
    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error.message || 'Ошибка запроса');
    }
    return await res.json();
  } catch (e) {
    throw e;
  }
}

export const api = {
  get: (url) => request(url),
  post: (url, data) => request(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }),
  put: (url, data) => request(url, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }),
  delete: (url) => request(url, { method: 'DELETE' })
}; 