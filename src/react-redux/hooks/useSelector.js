import { useContext, useLayoutEffect, useReducer } from "react";
import ReactReduxContext from "../ReactReduxContext";

// 获取数据的地方，还要负责数据的更新，所以需要 subscribe
function useSelectorWithStore(selector, store) {
  const { subscribe, getState } = store;
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const state = getState();
  const selectedState = selector(state);

  useLayoutEffect(() => {
    return subscribe(forceUpdate);
  }, [subscribe]);

  return selectedState;
}

function useSelector(selector) {
  const { store } = useContext(ReactReduxContext);
  const selectedState = useSelectorWithStore(selector, store);
  return selectedState;
}

export default useSelector;
