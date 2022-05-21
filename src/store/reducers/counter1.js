import { ADD1, MINUS1, RESET } from "../actions-type";

const initialState = { number: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD1:
      return { number: state.number + 1 };
    case MINUS1:
      return { number: state.number - 1 };
    case RESET:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
