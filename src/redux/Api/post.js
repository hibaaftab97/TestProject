import Axios from '.';

export const getPost = () => {
  return Axios.get('/posts');
};

export const addPost = data => {
  return Axios.post('/posts', data);
};
