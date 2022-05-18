import axios from 'axios';

export function getUserList() {
  return axios.get('/json/user');
}
