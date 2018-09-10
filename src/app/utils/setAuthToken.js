import axios from 'axios';

export default function setAuthToken(token) {
  token ?
    axios.defaults.headers.common['token'] = `${token}` :
    delete axios.defaults.headers.common['token']
}