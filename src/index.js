import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter1 />
        <Counter2 />
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
