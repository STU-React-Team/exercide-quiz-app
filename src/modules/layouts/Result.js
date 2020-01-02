import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Result = props => {
  const { questions, gameOver } = props;

  const counterResult = () => {
    let result = 0;
    questions.map(question => {
      if (question.selected === question.answer) result += 1;
      return result;
    });
    return result;
  };

  const styleResultTrue = {
    background: '#88f090',
  };
  const styleResultFalse = {
    background: '#ff8484',
  };

  const renderResultQuestion = questions.map(question => {
    return (
      <li
        key={question.id}
        style={
          question.answer === question.selected
            ? styleResultTrue
            : styleResultFalse
        }>
        <h2>
          Câu Hỏi {question.id} : {question.content}
        </h2>
        <ul className="l-result-option">
          {question.listOption.map(option => (
            <li key={option.id}>{option.contentOption}</li>
          ))}
        </ul>
        <h3>
          Đáp Án: {question.listOption[question.answer - 1].contentOption}
        </h3>
        <h3>
          Bạn Chọn:{' '}
          {question.selected !== 0
            ? question.listOption[question.selected - 1].contentOption
            : ' Bạn Không Trả Lời '}
        </h3>
      </li>
    );
  });
  
  return (
    <div className="result-wrapper container-fluid">
      <h1>Result : {gameOver && `${counterResult()}/10`}</h1>
      <div className="result row">
        <ul className="l-result">{gameOver && renderResultQuestion}</ul>
      </div>
    </div>
  );
};

Result.propTypes = {
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
  gameOver: PropTypes.bool.isRequired,
};

const mapStatetoProps = state => {
  return {
    gameOver: state.reducerQuestion.gameOver,
    questions: state.reducerQuestion.questions,
  };
};
export default connect(mapStatetoProps, null)(Result);
