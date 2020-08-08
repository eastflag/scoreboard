// action creator (펑션): action을 동적으로 생성
import {ADD_PLAYER} from "./action_types";

export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name
})