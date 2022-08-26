import axios from 'axios';
import {showToast} from './HelperFunction';
import {useDispatch, useSelector} from 'react-redux';
import {store} from '../store';

var StoredState = store.getState();
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',

  headers: {
    'Content-Type': 'application/json',
    Authorization:
      StoredState.authReducer.token &&
      `Bearer ${StoredState.authReducer.token}`,
  },
});

instance.interceptors.request.use(
  config => {
    console.log('REQUEST :', config);
    if (store.getState().authReducer?.token !== null) {
      let accessToken = store.getState().authReducer?.token;
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  error => {
    // console.log("REQUEST FAILURE:", error);
    showToast(error.message || 'Something went wrong');
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    console.log('RESPONSE :', response?.data);

    return response;
  },
  error => {
    console.log('RESPONSE FAILURE:', error?.response);

    return Promise.reject(error);
  },
);

export default instance;
