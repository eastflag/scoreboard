import React from 'react';
import './App.css';
import {Header} from './components/Header';
import Player from './components/Player';
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";

let maxId = 4; // 임시적으로 설정

class App extends React.Component {

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players}></Header>

        {
          this.props.players.map(player =>
            <Player name={player.name} score={player.score}
                    id={player.id} key={player.id}></Player>)
        }

        <AddPlayerForm></AddPlayerForm>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // 왼쪽이 props, 오른쪽이 store의 state
  players: state.playerReducer.players
})

export default connect(mapStateToProps, null)(App);
