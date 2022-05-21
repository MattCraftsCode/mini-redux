import { createStore } from "../redux";
import combinedReducers from "./reducers";

// 合并 reducers
const store = createStore(combinedReducers);

// console.log("store.index", store);

export { store };
