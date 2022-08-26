import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.authReducer;
const initialState_commonreducer = initialStates.commonReducer;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        customer: action.payload,
        loggedin: true,
        isLoading: false,
      };

    case types.LOGOUT:
      return {
        ...initialState,
        ...initialState_commonreducer,
      };

    default:
      return state;
  }
};

export default authReducer;
