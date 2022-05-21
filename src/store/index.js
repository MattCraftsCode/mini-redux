import { createStore } from "../redux";
import combinedReducers from "./reducers";

const initialState = {
  counter1: {
    number: 10,
  },
  counter2: {
    number: 20,
  },
};

// 合并 reducers
const store = createStore(combinedReducers, initialState);

const dispatch = store.dispatch;

// 中间件的核心原理就是重写 dispatch 方法
store.dispatch = function (action) {
  // pre

  // dispatch(action);

  setTimeout(() => {
    dispatch(action);
  }, 1000);

  // after
};

export default store;
