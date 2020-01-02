import ActionTypes from 'modules/ContantsQuestion';

const getListQuestionRequest = data => (
  {
    type: ActionTypes.GET_LIST_QUESTION,
    payload: data,
  }
);

export const getListQuestion = () => (
  async dispatch => {
    const res = await fetch('http://localhost:3001/questions');
    const data = await res.json();
    dispatch(getListQuestionRequest(data));
  }
);

export const onNextQuestion = () => (
  {
    type: ActionTypes.ON_NEXT_QUESTION,
  }
);

export const onPrevQuestion = () => (
  {
    type: ActionTypes.ON_PREV_QUESTION,
  }
)

export const onSelectedQuestion = (idQuestion, idOptionSelected) => (
  {
    type: ActionTypes.ON_SELECTED_ANSWER,
    payload: {
      idQuestion,
      idOptionSelected,
    },
  }
);

export const onStartTime = () => (
  {
    type: ActionTypes.ON_START_TIME,
  }
);


export const gameOver = () => (
  {
    type: ActionTypes.GAME_OVER,
  }
);

export const getResult = () => (
  {
    type: ActionTypes.GET_RESULT,
  }
);

