import { ADD1, MINUS1, RESET } from "../actions-type";

const actions = {
  add() {
    return { type: ADD1 };
  },
  minus() {
    return { type: MINUS1 };
  },
  reset() {
    return { type: RESET };
  },
};

export default actions;
