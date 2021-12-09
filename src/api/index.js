import axios from 'axios';
import urls from './Urls';

const appkey = 'q6869336_1638782157300';

const ajax = axios.create({
  baseURL: urls.baseURL,
  params: {
    appkey,
  },
});

ajax.interceptors.response.use((data) => {
  const newdata = data.data;
  if (newdata.status === 'success') {
    return newdata;
  }
  return Promise.reject(newdata.msg);
});

const login = (params) => ajax.post(urls.login, params);

export default {
  login,
};
