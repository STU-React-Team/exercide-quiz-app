import React from 'react';
import Question from 'components/question/';
import { useSelector, useDispatch } from 'react-redux';
import { resetAnswer, onShowBtnFinish } from 'actions/';
import { Link } from 'react-router-dom';

const Results = () => {
  const dispatch = useDispatch();
  const { questions, answers } = useSelector(state => state);

  const onResetAnswer = () => {
    dispatch(resetAnswer());
    dispatch(onShowBtnFinish(false));
  }

  const correctAnswers = answers.filter(answer => answer.isAnswer).length;
  const listResult = questions.map((question, index) => (
    <Question
      key={question.id}
      nameQuestion={question.name}
      indexQuestion={index}
      options={question.options}
      disabledOption
      checkAnswer
    />
  ));
  return (
    <>
      <h2 className="app__heading app__heading--blue">
        Result: {correctAnswers} of {questions.length}
      </h2>
      <div>{listResult}</div>
      <div className="container app__control">
        <Link to="/" className="app__link" onClick={onResetAnswer}>
          Again
        </Link>
      </div>
    </>
  );
};

export default Results;
