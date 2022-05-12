import axios from 'axios';

export const customHeader = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  authorization: process.env.VUE_APP_TOKEN
};

export const baseUrl = 'http://localhost:3000';

export default axios.create({
    baseUrl,
    headers: customHeader
})
