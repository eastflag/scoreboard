import React, {Component} from 'react';

export class Stopwatch extends Component {
  tickRef;
  state = {
    timer: 0,
    isRunning: false
  }

  // Dom이 렌더링된 직후에 호출되는 라이프사이클 메서드
  // 예) api 호출, 3rd 라이브러리 로딩
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  }

  // DOM이 파괴되기 직전에 호출
  // 예) 리소스 해제제
  coponentWillUnmount() {
    clearInterval(this.tickRef);
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>
          { this.state.isRunning ? 'Stop' : 'Start' }
        </button>
        <button>Reset</button>
      </div>
    )
  }

  tick = () => {
    console.log('tick');
    if (this.state.isRunning) {
      this.setState(prevState => ({
        timer: prevState.timer + 1
      }));
    }
  }

  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }))
  }
}