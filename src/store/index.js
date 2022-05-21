import { createStore } from "../redux";

const initialState = { number: 0 };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { number: state.number + action.number };
    case "MINUS":
      return { number: state.number - action.number };
    default:
      return state;
  }
};

export const store = createStore(reducer);
