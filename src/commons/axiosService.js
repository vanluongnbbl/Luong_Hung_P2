import axios from 'axios';
import Cookie from "js-cookie";

class AxiosService {
  constructor() {
    const instance = axios.create();
    const token = Cookie.get("accessToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  put(url, body) {
    return this.instance.put(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }
}

export default new AxiosService();