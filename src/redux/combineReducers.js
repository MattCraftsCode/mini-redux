function combineReducers(reducers) {
  return function (state = {}, action) {
    const nextState = {};
    for (let key in reducers) {
      // state[key] 是老的 state
      nextState[key] = reducers[key](state[key], action);
    }

    return nextState;
  };
}

export default combineReducers;
