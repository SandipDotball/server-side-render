import axios from 'axios';
import { FETCH__USER } from './actionTypes';

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('https://react-ssr-api.herokuapp.com/users');
  try {
    dispatch({
      type: FETCH__USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
