import { ADD2, MINUS2, RESET } from "../actions-type";

const initialState = { number: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD2:
      return { number: state.number + 1 };
    case MINUS2:
      return { number: state.number - 1 };
    case RESET:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
