import React, { useState } from 'react';
import QuestionOption from 'components/QuestionOption';

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const dataOption = [1, 2, 3, 4];

  const onPrevQuestion = e => {
    if (currentQuestion === 1) e.preventDefault();
    else setCurrentQuestion(currentQuestion + Number(e.target.dataset.set));
  };
  const onNextQuestion = e => {
    if (currentQuestion === 10) e.preventDefault();
    else setCurrentQuestion(currentQuestion + Number(e.target.dataset.set));
  };

  const listOption = dataOption.map((item, index) => (
    <QuestionOption key={item} index={index} />
  ));
  return (
    <div>
      <div className="app__title">
        <h1> QUIZ APP </h1>
      </div>
      <div className="container">
        <h2 className="app__heading"> Question {currentQuestion}: </h2>
        <div className="app-answer">{listOption}</div>
      </div>
      <div className="app__control">
        <div>
          <button
            data-set={-1}
            className={
              currentQuestion < 2 ? 'app__link app__link--disable' : 'app__link'
            }
            type="button"
            onClick={onPrevQuestion}>
            Prev
          </button>
        </div>
        <div>
          <button
            data-set={1}
            className={
              currentQuestion > 9 ? 'app__link app__link--disable' : 'app__link'
            }
            type="button"
            onClick={onNextQuestion}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
