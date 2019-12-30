import React from 'react';
import Option from 'components/question/Option';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Question = props => {
  const {
    indexQuestion,
    nameQuestion,
    options,
    disabledOption,
    checkAnswer,
  } = props;
  const { answers } = useSelector(state => state);

  const selectedOption = answers[indexQuestion]
    ? Number(answers[indexQuestion].id)
    : 0;

  const resultAnswer = answers[indexQuestion].isAnswer ? (
    <h5 style={{ color: 'blue', fontStyle: 'italic', fontSize: '20px' }}>
      Your answer is Correct.
    </h5>
  ) : (
    <h5 style={{ color: 'red', fontStyle: 'italic', fontSize: '20px' }}>
      Your answer is Wrong.
    </h5>
  );

  const listOption = options.map((option, index) => (
    <Option
      key={option.id}
      nameoption={option.name}
      id={option.id}
      isAnswer={option.isAnswer}
      indexOption={index}
      indexAnswer={indexQuestion}
      selected={selectedOption}
      disabled={disabledOption}
      checkAnswer={checkAnswer}
    />
  ));
  return (
    <>
      <div className="container">
        <h2 className="app__heading app__heading--italic">
          Question {indexQuestion + 1}:
        </h2>
        <div className="app__question">{nameQuestion}</div>
        <div className="app-answer">{listOption}</div>
        <div>{checkAnswer ? resultAnswer : null}</div>
      </div>
    </>
  );
};

Question.propTypes = {
  indexQuestion: PropTypes.number.isRequired,
  nameQuestion: PropTypes.string.isRequired,
  disabledOption: PropTypes.bool.isRequired,
  checkAnswer: PropTypes.bool.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
};

export default React.memo(Question);
