import ActionTypes from './ContantsQuestion';


const getListQuestionRequest = (data) => {
  return {
    type: ActionTypes.GET_LIST_QUESTION,
    payload: data,
  };
}

export const getListQuestion = () => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:3001/questions");
    const data = await res.json();
    dispatch(getListQuestionRequest(data))
  }
}

export const onNextQuestion = () => {
  return {
    type: ActionTypes.ON_NEXT_QUESTION
  }
}
export const onPrevQuestion = () => {
  return {
    type: ActionTypes.ON_PREV_QUESTION
  }
}


export const onSelectedQuestion = (idQuestion, idOptionSelected) => {
  return {
    type: ActionTypes.ON_SELECTED_ANSWER,
    payload: {
      idQuestion,
      idOptionSelected,
    },
  };
};

export const onStartTime = () => {
  return {
    type: ActionTypes.ON_START_TIME
  }
}

export const gameOver = () => {
  return {
    type: ActionTypes.GAME_OVER
  }
}

export const getResult = () => {
  return {
    type: ActionTypes.GET_RESULT,
  };
};
