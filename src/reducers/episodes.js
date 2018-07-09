import { RECEIVE_API_EPISODES } from "../actions";

const inicialState = {
    episodes: null,
};

export default (state = inicialState, { type, data }) => {
  switch (type) {
    case RECEIVE_API_EPISODES:
      return {...state, episodes: data};
    default:
      return state;
  }
};