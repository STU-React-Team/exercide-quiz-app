const initialState = false;

export default function answer(state = initialState, action) {
  switch (action.type) {
    case 'SET_AUTH':
      return action.paydoad;
    default:
      return state;
  }
}
