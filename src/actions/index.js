import axios from 'axios';

export const setAuth = data => ({ type: 'SET_AUTH', paydoad: data });

const receiveQuestions = data => ({ type: 'RECEIVE_QUESTIONS', paydoad: data });

export const fetchQuestions = () => dispatch => {
  dispatch(setAuth(true));
  axios
    .get(`http://5e05c2032f5dff0014f7dd4f.mockapi.io/quizApp`)
    .then(res => dispatch(dispatch(receiveQuestions(res.data))));
};

export const addAnswer = data => ({ type: 'ADD_ANSWER', paydoad: data });

const resetAnswer = () => ({ type: 'RESET_ANSWER' });

export const showBtnFinish = data => ({
  type: 'SHOW_BTN_FINISH',
  paydoad: data,
});

export const resetApp = () => dispatch => {
  dispatch(resetAnswer());
  dispatch(showBtnFinish(false));
};
