export const setAuth = data => {
  return {
    type: 'SET_AUTH',
    paydoad: data,
  };
};

const receiveQuestions = data => {
  return {
    type: 'RECEIVE_QUESTIONS',
    paydoad: data,
  };
};

export const fetchQuestions = () => {
  return async dispatch => {
    dispatch(setAuth(true));
    const response = await fetch(
      `http://5e05c2032f5dff0014f7dd4f.mockapi.io/quizApp`,
    );
    const json = await response.json();
    return dispatch(receiveQuestions(json));
  };
};

export const addAnswer = data => {
  return {
    type: 'ADD_ANSWER',
    paydoad: data,
  };
};
