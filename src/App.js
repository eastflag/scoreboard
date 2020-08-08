import React from 'react';
import './App.css';
import {Header} from './components/Header';
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";
import {CustomPlayer} from "./components/CustomPlayer";
import _ from 'lodash';

let maxId = 4; // 임시적으로 설정

class App extends React.Component {
  /// highScore 구해서 리턴하다.
  getHighScore() {
    const highScoreObject = _.maxBy(this.props.players, 'score');
    return highScoreObject.score === 0 ? '' : highScoreObject.score;
  }

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players}></Header>

        {
          this.props.players.map(player =>
            <CustomPlayer name={player.name} score={player.score}
                    id={player.id} key={player.id}
                    isHighScore={player.score === this.getHighScore()}></CustomPlayer>)
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
