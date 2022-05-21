import { ADD1, MINUS1, ADD2, MINUS2, RESET } from "../actions-type";

const initialState = { number: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD1:
      return { number: state.number + 1 };
    case MINUS1:
      return { number: state.number - 1 };
    default:
      return state;
  }
}

export default reducer;