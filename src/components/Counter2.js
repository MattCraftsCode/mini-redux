import React from "react";
import bindActionCreators from "../redux/bindActionCreators";
import store from "../store";
import actions from "../store/actions/counter2";

// console.log(store.getState());
const boundActionCreators = bindActionCreators(actions, store.dispatch);
class Counter2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: store.getState().counter2.number,
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ number: store.getState().counter2.number });
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

export default Counter2;
