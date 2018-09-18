export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_POST':
    const { user, title, message, votes, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        user: user,
        title: title,
        message: message,
        votes: votes,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
