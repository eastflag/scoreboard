export const userReducer = (state = 'TOM', action) => {
  switch (action.type) {
    case 'updateUser':
      return action.payload;
  }
  return state;
}