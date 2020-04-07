import { FETCH__USER } from '../actions/actionTypes';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH__USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
