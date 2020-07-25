import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='h1'>Scoreboard</h1>
      <span className='stats'>Player: 1</span>
    </header>
  );
}

class Counter extends React.Component {
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

const Player = (props) => {
  console.log(props);
  return (
    <div className="player">
      <span className='player-name'>
        <button className='remove-player' onClick={() => props.removePlayer(props.id)}> x </button>
        {props.name}
      </span>
      <Counter score={props.score}></Counter>
    </div>
  );
}

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4},
    ]
  }
  // 1. 펑션 작성
  handleRemovePlayer = (id) => {
    console.log('remove player: ', id);
    // 로직 작성
    this.setState(prevState => {
      // immutable: 원본데이터가 불변 => 새로운 배열을 리턴
      const players = [ ...prevState.players ];
      const index = players.findIndex(player => player.id === id)
      players.splice(index, 1);
      return { players: players};
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header></Header>

        {
          this.state.players.map(player =>
            <Player name={player.name} score={player.score} id={player.id} key={player.id}
              //2. 펑션을 props로 자식에게 내려준다.
                    removePlayer={this.handleRemovePlayer}></Player>)
        }

      </div>
    );
  }
}

export default App;
