import { ADD2, MINUS2, RESET } from "../actions-type";

const actions = {
  add() {
    return { type: ADD2 };
  },
  minus() {
    return { type: MINUS2 };
  },
  reset() {
    return { type: RESET };
  },
};

export default actions;
