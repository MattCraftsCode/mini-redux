import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";

class App extends React.Component {
  state = { number: 0 };
  componentDidMount() {
    this.unSubscribe = store.subscribe(() => {
      this.setState({ number: store.getState().number });
    });
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  change = (type, number) => {
    store.dispatch({
      type,
      number,
    });
  };

  render() {
    return (
      <div>
        {this.state.number}
        <button onClick={() => this.change("MINUS", 10)}>-</button>
        <button onClick={() => this.change("ADD", 1)}>+</button>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
