import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';
import {AddPlayerForm} from "./components/AddPlayerForm";
import {connect} from "react-redux";

let maxId = 4; // 임시적으로 설정

class App extends React.Component {
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

  handleAddPlayer = (name) => {
    console.log('handleAddPlayer: ', name);
    // players에 객체 추가
    this.setState(prevState => {
      const players = [ ...prevState.players ];
      players.push({name, score: 0, id: ++maxId});
      return { players }
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players}></Header>

        {
          this.props.players.map(player =>
            <Player name={player.name} score={player.score} id={player.id} key={player.id}
              //2. 펑션을 props로 자식에게 내려준다.
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore}></Player>)
        }

        <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // 왼쪽이 props, 오른쪽이 store의 state
  players: state.playerReducer.players
})

export default connect(mapStateToProps, null)(App);
