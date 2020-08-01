import React from "react";

export class Counter extends React.Component {
  state = {
    score: 0,
    name: 'ldk'
  }

  handleScore = (delta) => {
    // this.state.score += 1;
    // this.setState({score: this.state.score + 1});
    this.setState((prevState) => ({score: prevState.score + delta}));
    //
  }

  render() {
    return (
      <div className="counter">
        <button className='counter-action decrement' onClick={() => this.handleScore(-1)}> - </button>
        <span className='counter-score'>{this.state.score}</span>
        <button className='counter-action increment' onClick={() => this.handleScore(1)}> + </button>
      </div>
    );
  }
}