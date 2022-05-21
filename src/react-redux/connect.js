import React, { useContext, useReducer, useLayoutEffect, useMemo } from "react";
import ReactReduxContext from "./ReactReduxContext";
import bindActionCreators from "../redux/bindActionCreators";

function connectClass(mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    return class extends React.Component {
      static contextType = ReactReduxContext;

      // 类组建的构造函数中使用 context,要用第二个参数，不能 this.context
      constructor(props, context) {
        super(props);

        const { store } = context;
        const { getState, dispatch, subscribe } = store;
        const prevState = getState();

        // 设置初始化 state，方便后面刷新组件
        this.state = mapStateToProps(getState());
        this.unsubscribe = subscribe(() => {
          this.setState(mapStateToProps(getState()));
        });

        // 优化: 防止重复加载
        // 做一个映射，得到最新的状态
        this.stateProps = mapStateToProps(prevState);

        // 优化: 防止重复加载
        let dispatchProps;
        if (typeof mapDispatchToProps === "function") {
          // mapDispatchToProps 为函数，对应的是这种使用方式
          // mapDispatchToProps = (dispatch) => ({
          //   add() {
          //     dispatch({ type: "ADD" });
          //   },
          // });
          dispatchProps = mapDispatchToProps(dispatch);
        } else if (typeof mapDispatchToProps === "object") {
          dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
        } else {
          dispatchProps = { dispatch };
        }

        this.dispatchProps = dispatchProps;

        // this.unsubscribe = subscribe(() => {
        //   this.setState({ x: this.state.x + 1 }, () => {
        //     console.log(this.state);
        //   });
        // });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return (
          <Component {...this.props} {...this.state} {...this.dispatchProps} />
        );
      }
    };
  };
}

/**
 *
 * @param {*} mapStateToProps 把仓库状态映射为组件的属性
 * @param {*} mapDispatchToProps 把派发动作的方法映射为组件的属性
 */
function connectFunction(mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    // 真正的函数组件
    // 属性代理
    return function (props) {
      const { store } = useContext(ReactReduxContext);
      const { getState, dispatch, subscribe } = store;

      const prevState = getState();

      // 优化: 防止重复加载
      // 做一个映射，得到最新的状态
      const stateProps = useMemo(() => mapStateToProps(prevState), [prevState]);

      // 优化: 防止重复加载
      let dispatchProps = useMemo(() => {
        let dispatchProps;
        if (typeof mapDispatchToProps === "function") {
          // mapDispatchToProps 为函数，对应的是这种使用方式
          // mapDispatchToProps = (dispatch) => ({
          //   add() {
          //     dispatch({ type: "ADD" });
          //   },
          // });
          dispatchProps = mapDispatchToProps(dispatch);
        } else if (typeof mapDispatchToProps === "object") {
          dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
        } else {
          dispatchProps = { dispatch };
        }

        return dispatchProps;
      }, [dispatch]);

      // 让组件刷新，重新执行 compareTwoVDOM
      const [, forceUpdate] = useReducer((x) => x + 1, 0);
      useLayoutEffect(() => {
        // 记得卸载时取消
        return subscribe(forceUpdate);
      }, [subscribe]);

      return <Component {...props} {...stateProps} {...dispatchProps} />;
    };
  };
}

export default connectClass;
