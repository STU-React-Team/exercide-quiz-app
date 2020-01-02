import React from 'react';
import Question from 'components/question/';
import { connect } from 'react-redux';
import { resetApp } from 'actions/';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Results = ({ listQuestion, listAnswer, onResetApp }) => {
  const correctAnswers = listAnswer.filter(answer => answer.isAnswer).length;
  const listResult = listQuestion.map((question, index) => (
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
        Result: {correctAnswers} of {listQuestion.length}
      </h2>
      <div>{listResult}</div>
      <div className="container app__control">
        <Link to="/" className="app__link" onClick={onResetApp}>
          Again
        </Link>
      </div>
    </>
  );
};

Results.propTypes = {
  listQuestion: PropTypes.instanceOf(Array).isRequired,
  listAnswer: PropTypes.instanceOf(Array).isRequired,
  onResetApp: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  listQuestion: state.questions,
  listAnswer: state.answers,
});

const mapDispatchToProps = dispatch => ({
  onResetApp: () => dispatch(resetApp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
