import React from "react";
import bindActionCreators from "../redux/bindActionCreators";
import { store } from "../store";
import actions from "../store/actions/counter1";

const boundActionCreators = bindActionCreators(actions, store.dispatch);
class Counter1 extends React.Component {
  state = { number: 0 };

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ number: store.getState().counter1.number });
    });
  }

  render() {
    return (
      <div>
        {this.state.number}
        <button onClick={boundActionCreators.minus}>-</button>
        <button onClick={boundActionCreators.add}>+</button>
        <button onClick={boundActionCreators.reset}>reset</button>
      </div>
    );
  }
}

export default Counter1;
