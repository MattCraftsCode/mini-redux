import React from "react";
import actions from "../store/actions/counter1";
import connect from "../react-redux/connect";

class Counter1 extends React.Component {
  state = { number: 0 };

  render() {
    return (
      <div>
        {this.props.number}
        <button onClick={this.props.minus}>-</button>
        <button onClick={this.props.add}>+</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter1);
