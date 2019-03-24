/*
import React from 'react';

class Counter extends React.Component {
    state = {
      value:0
    };

    increase = () => {
        console.log("+1");
        this.setState({value: this.state.value + 1});
    };

    decrease = () => {
        console.log("-1");
        this.setState({value: this.state.value - 1});
    };

  render() {
      let { value } = this.state; 
    return ( 
    <div style="background-color:DodgerBlue;" >
         <button onClick={this.increase}>+</button>
         <h1 style="color:Tomato;">{value}</h1>
         <button onClick={this.decrease}>-</button>

    <div/>
    );
  }
}

export default Counter;