import { DO_LOGIN, FETCH_API_DATA } from './types';
import axios from 'axios';

const apiUrl = 'http://httpbin.org';

export const login = ({ user, pass }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/anything`, {user, pass})
      .then(response => {
        dispatch(loginSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const loginSuccess =  (data) => {
  return {
    type: DO_LOGIN,
    payload: {
      user: data.json.user
    }
  }
};

export const fetchUuid = (data) => {
  return {
    type: FETCH_API_DATA,
    payload: {
      uuid: data.uuid
    }
  }
};

export const fetchApiData = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/uuid`)
      .then(response => {
        dispatch(fetchUuid(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};