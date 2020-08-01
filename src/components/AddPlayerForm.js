import React from 'react';

export class AddPlayerForm extends React.Component {
  render() {
    return (
      <form className="form">
        <input className="input" type="text" placeholder="enter a plaeyr's name"/>
        <input className="input" type="submit" value="Add Player"/>
      </form>
    );
  }
}