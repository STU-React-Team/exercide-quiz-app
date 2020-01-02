import ActionTypes from 'modules/ContantsQuestion';

const initState = {
  currentQuestion: 1,
  questions: [],
  onTime: false,
  gameOver: false,
};

const ReducerQuestion = (state = initState, action) => {
  // eslint-disable-next-line prefer-const
  let { questions, currentQuestion } = state;
  switch (action.type) {
    case ActionTypes.GET_LIST_QUESTION:
      return { ...state, questions: action.payload };

    case ActionTypes.ON_SELECTED_ANSWER: {
      const { idQuestion, idOptionSelected } = action.payload;
      questions[idQuestion - 1].selected = idOptionSelected;
      return { ...state, questions };
    }
    case ActionTypes.GET_RESULT:
      return { ...state, onTime: false, gameOver: true };
    case ActionTypes.ON_NEXT_QUESTION:
      return { ...state, currentQuestion: currentQuestion + 1 };
    case ActionTypes.ON_PREV_QUESTION:
      return { ...state, currentQuestion: currentQuestion - 1 };
    case ActionTypes.ON_START_TIME:
      return { ...state, time: 120, onTime: true, gameOver: false };
    case ActionTypes.GAME_OVER:
      return { ...state, gameOver: true, onTime: false };
    default:
      return state;
  }
};

export default ReducerQuestion;
