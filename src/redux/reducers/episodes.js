import { RECEIVE_API_EPISODES } from "../constants";

const initialState = {
    episodes: null,
};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case RECEIVE_API_EPISODES:
      return {...state, episodes: data};
    default:
      return state;
  }
};