import React from "react";
import ReactReduxContext from "./ReactReduxContext";

function Provider(props) {
  return (
    <ReactReduxContext.Provider value={{ store: props.store }}>
      {props.children}
    </ReactReduxContext.Provider>
  );
}

// 官方推荐的写法，先定义 function，再导出
export default Provider;
