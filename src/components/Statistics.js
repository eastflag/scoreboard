import React from 'react';
import _ from 'lodash';

export const Statistics = (props) => {
  let totalPlayer = props.players.length;
  let totalScore = 0;
  // 로직 구현
  // props.players.forEach(player => totalScore += player.score);
  totalScore = _.sumBy(props.players, 'score');

  return (
    <table className='stats'>
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayer}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  )
}