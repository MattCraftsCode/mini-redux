// redux 的实现
export const createStore = (reducer, preloadedState) => {
  let state = preloadedState;
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    // combinedRecuers 已经合并后的函数
    state = reducer(state, action);

    // 更新 state 后，触发 subscribe
    listeners.forEach((l) => l());
  }

  function subscribe(listen) {
    listeners.push(listen);

    return () => {
      listeners.filter((l) => l !== listen);
    };
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
};
