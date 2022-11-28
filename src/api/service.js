import { baseurl } from './endpoints';

// endpoint = /character
export const fetchApi = (endpoint) => {
  return new Promise((resolve, reject) => {
    const method = 'GET';
    const headers = { 'Content-Type': 'application/json' };

    fetch(baseurl + endpoint, {
      method,
      headers,
    })
      .then((res) => convertJSON(res))
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
};

const convertJSON = async (res) => {
  const data = res.status === 200 ? await res.json() : [];

  return { data, status: res.status, success: res.status === 200 };
};
