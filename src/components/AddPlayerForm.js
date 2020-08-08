import React from 'react';
import {addPlayer} from "../redux/actions";
import connect from "react-redux/lib/connect/connect";

class AddPlayerForm extends React.Component {
  state = {
    value: ''
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // 폼 유효성 검증
    const player = document.getElementById("player");
    const form = document.getElementById("form");

    console.log(player.validity.valid);
    console.log(form.checkValidity());

    if (!form.checkValidity()) {
      // 에러문구를 띄우고
      return;
    }

    // name을 부모에게 넘겨서 부모가 player에 추가
    this.props.addPlayer(this.state.value);
  }

  render() {
    return (
      <form id="form" className="form" onSubmit={this.handleSubmit} noValidate>
        <input id="player" className="input" type="text" placeholder="enter a plaeyr's name"
          value={this.state.value} onChange={this.handleValueChange}
          required />
        <input className="input" value="Add Player" type="submit"/>
      </form>
    );
  }
}

const mapActionToProps = (dispatch) => ({
  // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는) 펑션
  addPlayer: (name) => dispatch(addPlayer(name))
})

export default connect(null, mapActionToProps)(AddPlayerForm);