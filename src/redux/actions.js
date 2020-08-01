// action creator (펑션): action을 동적으로 생성
export const updateUser = (name) => ({
  type: 'updateUser',
  payload: name
})