import { RECEIVE_API_DATA, TOGGLE_MODAL } from "../actions";

const inicialState = {
    dataTest: null,
    modalWindow: false,
    data: [],
};

export default (state = inicialState, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return {...state, data};
    case TOGGLE_MODAL:
      return { ...state, modalWindow: data, };
    default:
      return state;
  }
};