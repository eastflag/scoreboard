import Counter from "./Counter";
import React from "react";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

const Player = (props) => {
  // console.log(props);
  return (
    <div className="player">
      <span className='player-name'>
        <button className='remove-player' onClick={() => props.removePlayer(props.id)}> x </button>
        {props.children}
        {props.name}
      </span>
      <Counter id={props.id} score={props.score}></Counter>
    </div>
  );
}

const mapActionToProps = (dispatch) => ({
  // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는) 펑션
  removePlayer: (id) => dispatch(removePlayer(id))
})

export default connect(null, mapActionToProps)(Player);