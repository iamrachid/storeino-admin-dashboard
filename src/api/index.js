import axios from 'axios';

function getToken() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (user && user.token) || '';
}

export const customHeader = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  authorization: getToken()
}

export const baseUrl = 'http://localhost:3000';

export default axios.create({
    headers: customHeader
})
