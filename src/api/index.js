import axios from 'axios';

export const customHeader = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  authorization: process.env.VUE_APP_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2E2OGU5YTExODk0MGZlMTRkNmJmMSIsImlhdCI6MTY1MjE5MjQ0NywiZXhwIjoxNjU5OTY4NDQ3fQ.gYQyJbBaD3604Q3rBelq8pwv6vYk0EBPiRGfPpddWvo\n'
};

export const baseUrl = 'http://localhost:3000';

export default axios.create({
    headers: customHeader
})
