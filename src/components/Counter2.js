import React from "react";
import bindActionCreators from "../redux/bindActionCreators";
import { store } from "../store";
import actions from "../store/actions/counter2";

const boundActionCreators = bindActionCreators(actions, store.dispatch);
class Counter2 extends React.Component {
  state = { number: 0 };

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ number: store.getState().counter2.number });
    });
  }

  render() {
    return (
      <div>
        {this.state.number}
        <button onClick={boundActionCreators.add}>+</button>
        <button onClick={boundActionCreators.minus}>-</button>
      </div>
    );
  }
}

export default Counter2;
