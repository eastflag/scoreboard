import React from 'react';

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    console.log('handleSubmit');
    e.preventDefault();
    // name을 부모에게 넘겨서 부모가 player에 추가
    this.props.addPlayer(this.state.value);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="input" type="text" placeholder="enter a plaeyr's name"
          value={this.state.value} onChange={this.handleValueChange}/>
        <input className="input" value="Add Player" type="submit"/>
      </form>
    );
  }
}