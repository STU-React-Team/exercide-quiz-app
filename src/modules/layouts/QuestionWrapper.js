import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getListQuestion, onStartTime } from 'modules/ActionQuestion';
import Question from 'modules/layouts/Question';

const QuestionWrapper = props => {
  const { currentQuestion, questions, onTime, gameOver, getListQuestionDisp, onStartTimeDisp } = props;
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
    onStartTimeDisp();
    getListQuestionDisp();
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
  getListQuestionDisp: PropTypes.func.isRequired,
  onStartTimeDisp: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    questions: state.reducerQuestion.questions,
    currentQuestion: state.reducerQuestion.currentQuestion,
    gameOver: state.reducerQuestion.gameOver,
    onTime: state.reducerQuestion.onTime,
  };
};

const mapDispatchtoProps = dispatch => (
  {
    onStartTimeDisp : () => dispatch(onStartTime()),
    getListQuestionDisp : () => dispatch(getListQuestion())
  }
)

export default connect(mapStateToProps, mapDispatchtoProps)(QuestionWrapper);
