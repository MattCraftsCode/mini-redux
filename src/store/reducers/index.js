import counter1 from "./counter1";
import counter2 from "./counter2";
import combineReducers from "../../redux/combineReducers";

const reducers = {
  counter1,
  counter2,
};

const combinedReducers = combineReducers(reducers);
export default combinedReducers;
