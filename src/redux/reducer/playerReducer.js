import {ADD_PLAYER} from "../action_types";

let maxId = 4; // 임시적으로 설정

const playerInitlState = {
  players: [
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK', score: 0, id: 4},
  ]
}

export const playerReducer = (state = playerInitlState, action) => {

  switch (action.type) {
    case ADD_PLAYER:
      const players = [ ...state.players ];
      players.push({name: action.name, score: 0, id: ++maxId});
      return {
        ...state,
        players
      };
    default:
      return state;
  }

}