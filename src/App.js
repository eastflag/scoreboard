import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
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
