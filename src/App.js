import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';
import {AddPlayerForm} from "./components/AddPlayerForm";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
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

  handleChangeScore = (id, delta) => {
    console.log('handleScore:', id, delta);
    // 로직 구현
    this.setState(prevState => {
      const players = [ ...prevState.players ];
      players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      });
      return {players}
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players}></Header>

        {
          this.state.players.map(player =>
            <Player name={player.name} score={player.score} id={player.id} key={player.id}
              //2. 펑션을 props로 자식에게 내려준다.
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore}></Player>)
        }

        <AddPlayerForm></AddPlayerForm>

      </div>
    );
  }
}

export default App;
