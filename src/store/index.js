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

// console.log("store.index", store);

export default store;
