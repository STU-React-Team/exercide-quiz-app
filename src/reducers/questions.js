const initialState = [];

const questions = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_QUESTIONS':
      return action.paydoad;
    default:
      return state;
  }
};

export default questions;
