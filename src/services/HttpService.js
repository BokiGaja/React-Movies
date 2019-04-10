import axios from 'axios';

const http = axios.create({
  baseURL: 'http://127.0.0.1:8000'
});


export const ENDPOINTS = {
  MOVIES: '/api/movies'
};

class HttpService {
  get(url) {
    return http.get(url)
  }

  post(url, body) {
    return http.post(url, body)
  }

  put(url, body) {
    return http.put(url, body)
  }

  delete(url, id) {
    return http.delete(url, id);
  }
}

export const httpService = new HttpService();