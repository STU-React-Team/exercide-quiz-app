import React from 'react';
import Option from 'components/Option';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Question = props => {
  const { indexQuestion, name, options, disabled } = props;
  const { answers } = useSelector(state => state);

  const selectedOption = answers[indexQuestion]
    ? Number(answers[indexQuestion].id)
    : 0;

  const listOption = options.map((option, index) => (
    <Option
      key={option.id}
      index={index}
      name={option.name}
      id={option.id}
      indexAnswer={indexQuestion}
      isAnswer={option.isAnswer}
      selected={selectedOption}
      disabled={disabled}
    />
  ));
  return (
    <>
      <div className="container">
        <h2 className="app__heading app__heading--italic">
          Question {indexQuestion + 1}:
        </h2>
        <div className="app__question">{name}</div>
        <div className="app-answer">{listOption}</div>
      </div>
    </>
  );
};

Question.propTypes = {
  indexQuestion: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
};

export default React.memo(Question);
