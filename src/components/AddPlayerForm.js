import React, {useState} from 'react';
import {addPlayer} from "../redux/actions";
import {connect, useDispatch} from "react-redux";

function AddPlayerForm() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  let handleValueChange = (e) => {
    setValue(e.target.value);
  }

  let handleSubmit = (e) => {
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
    dispatch(addPlayer(value));
  }

  return (
    <form id="form" className="form" onSubmit={handleSubmit} noValidate>
      <input id="player" className="input" type="text" placeholder="enter a plaeyr's name"
        value={value} onChange={handleValueChange}
        required />
      <input className="input" value="Add Player" type="submit"/>
    </form>
  );
}

export default AddPlayerForm;