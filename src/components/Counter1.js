import React from "react";
import actions from "../store/actions/counter1";
import connect from "../react-redux/connect";
import { useDispatch, useSelector } from "../react-redux";

if (false) {
  class Counter1 extends React.Component {
    state = { number: 0 };

    add = () => {
      debugger;
      this.props.add();
    };

    render() {
      return (
        <div>
          {this.props.number}
          <button onClick={this.props.minus}>-</button>
          <button onClick={this.add}>+</button>
          <button onClick={this.props.reset}>reset</button>
        </div>
      );
    }
  }

  // 把总状态映射出来一个新状态
  const mapStateToProps = (state) => {
    return state.counter1;
  };
  const mapDispatchToProps = actions;

  // export default connect(mapStateToProps, mapDispatchToProps)(Counter1);
}

function Counter1(props) {
  const dispatch = useDispatch();
  const add = () => {
    dispatch(actions.add());
  };
  const minus = () => {
    dispatch(actions.minus());
  };
  const { number } = useSelector((state) => {
    return state.counter1;
  });
  return (
    <div>
      {number}
      <button onClick={minus}>-</button>
      <button onClick={add}>+</button>
    </div>
  );
}

export default Counter1;
