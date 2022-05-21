import React from "react";
import ReactDOM from "react-dom";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import { Provider } from "./react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter1 />
        <Counter2 />
      </Provider>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
