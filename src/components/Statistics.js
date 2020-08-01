import React from 'react';

export const Statistics = (props) => {
  let totalPlayer = 0;
  let totalScore = 0;
  // 로직 구현

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