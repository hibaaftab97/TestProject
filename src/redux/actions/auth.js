import {LOGIN} from '../types';

const userSignUp = payload => {
  return {
    type: LOGIN,
    payload,
  };
};

export {userSignUp};
