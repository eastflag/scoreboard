import {ADD_PLAYER, REMOVE_PLAYER} from "../action_types";

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
  let players;

  switch (action.type) {
    case ADD_PLAYER:
      players = [ ...state.players ];
      players.push({name: action.name, score: 0, id: ++maxId});
      return {
        ...state,
        players
      };
    case REMOVE_PLAYER:
      players = [ ...state.players ];
      const index = players.findIndex(player => player.id === action.id)
      players.splice(index, 1);
      return {
        ...state,
        players
      };
    default:
      return state;
  }

}