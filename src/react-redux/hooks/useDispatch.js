import { useContext } from "react";
import ReactContext from "../ReactReduxContext";

// 对标 mapDispatchToProps
function useDispatch() {
  const { store } = useContext(ReactContext);
  const { dispatch } = store;

  return dispatch;
}

export default useDispatch;
