import Counter from "./Counter";
import React from "react";
import {removePlayer} from "../redux/actions";
import {connect, useDispatch} from "react-redux";

const Player = (props) => {
  const dispatch = useDispatch();
  // console.log(props);
  return (
    <div className="player">
      <span className='player-name'>
        <button className='remove-player'
                onClick={() => dispatch(removePlayer(props.id))}> x </button>
        {props.children}
        {props.name}
      </span>
      <Counter id={props.id} score={props.score}></Counter>
    </div>
  );
}

export default Player;