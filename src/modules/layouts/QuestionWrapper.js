import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { getListQuestion, onStartTime } from '../ActionQuestion';
import Question from './Question';

const QuestionWrapper = props => {
  const { currentQuestion, questions, onTime, gameOver } = props;
  const [start, setStart] = useState(false);
  const dispatch = useDispatch();

  const handleStart = () => {
    setStart(true);
    dispatch(onStartTime());
    dispatch(getListQuestion());
  };

  return (
    <div className="question container-fluid">
      <div className=" container">
        <div className="question-row row">
          {!onTime && (
            <button
              type="button"
              className="fas fa-play-circle"
              onClick={handleStart}>
              Bắt đầu
            </button>
          )}
          {start && !gameOver && questions.length > 0 && (
            <Question
              key={questions[currentQuestion - 1].id}
              id={questions[currentQuestion - 1].id}
              content={questions[currentQuestion - 1].content}
              listOption={questions[currentQuestion - 1].listOption}
              answer={questions[currentQuestion - 1].answer}
              selected={questions[currentQuestion - 1].selected}
            />
          )}
        </div>
      </div>
    </div>
  );
};

QuestionWrapper.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      selected: PropTypes.number.isRequired,
      listOption: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          contentOption: PropTypes.string.isRequired,
        }),
      ).isRequired,
      answer: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onTime: PropTypes.bool.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    questions: state.reducerQuestion.questions,
    currentQuestion: state.reducerQuestion.currentQuestion,
    gameOver: state.reducerQuestion.gameOver,
    onTime: state.reducerQuestion.onTime,
  };
};

export default connect(mapStateToProps, null)(QuestionWrapper);
