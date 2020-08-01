import React from "react";
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";

export const Header = (props) => {
  return (
    <header className='header'>
      <Statistics players={props.players}></Statistics>
      <h1 className='h1'>Scoreboard</h1>
      <Stopwatch></Stopwatch>
    </header>
  );
}