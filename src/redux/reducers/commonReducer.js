import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.commonReducer;

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    case types.TIMEIN:
      return {
        ...state,
        attendance: true,
      };
    case types.TIMEOUT:
      return {
        ...state,
        attendance: false,
      };

    default:
      return state;
  }
};

export default commonReducer;
