import axios from 'axios'

const auth = axios.create({
  baseURL: 'http://localhost:8000/api/auth'
});

class AuthService {
  async login(credentials) {
    try {
      const {data} = await auth.post('/login', credentials);
      if (data.acces_token) {
        const token = data.acces_token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
      return data;
    } catch (e) {
      return e;
    }
  }

  async logout(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ` + token;
    try {
      const {data} = await auth.post('/logout');
      localStorage.removeItem('token');
      return data;
    } catch (e) {
      return e;
    }
  }

  async register(credentials) {
    try {
      const {data} = await auth.post('/register', credentials);
      return data;
    } catch (e) {
      return e;
    }
  }
}

export const authService = new AuthService();