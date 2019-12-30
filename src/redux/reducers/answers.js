const initialState = new Array(10);

export default function answer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ANSWER':
      state.splice(action.paydoad.indexAnswer, 1, {
        isAnswer: action.paydoad.isAnswer,
        id: action.paydoad.id,
      });
      return state;
    default:
      return state;
  }
}
