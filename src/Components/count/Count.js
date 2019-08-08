import React, { Component } from "react";
import Clock from "../clock/Clock";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "May, 17, 2020, 22:56:35" };
  }
  render() {
    return (
      
        <div className="App-date">
        <Clock deadline={this.state.deadline} />
        </div>
  
    );
  }
}
export default Count;