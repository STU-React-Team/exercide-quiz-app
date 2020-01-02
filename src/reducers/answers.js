const initialState = new Array(10);

export default function answer(
  state = initialState.fill({ isAnswer: false }),
  action,
) {
  switch (action.type) {
    case 'ADD_ANSWER':
      state.splice(action.paydoad.indexAnswer, 1, {
        isAnswer: action.paydoad.isAnswer,
        id: action.paydoad.id,
      });
      return state;
    case 'RESET_ANSWER':
      return initialState.fill({ isAnswer: false });
    default:
      return state;
  }
}
