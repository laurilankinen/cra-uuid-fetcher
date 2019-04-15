import { FETCH_API_DATA } from '../actions/types';

export default function commonReducer(state = [], action) {
  switch (action.type) {
    case FETCH_API_DATA:
      return action.payload.uuid;
    default:
      return state;
  }
}