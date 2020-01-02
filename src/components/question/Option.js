import React from 'react';
import { connect } from 'react-redux';
import { addAnswer } from 'actions/';
import PropTypes from 'prop-types';

const Option = props => {
  const {
    indexOption,
    nameoption,
    idOption,
    indexAnswer,
    isAnswer,
    selectedIdOption,
    disabled,
    checkAnswer,
    onAddAnswer,
  } = props;

  const setAnswer = e => {
    onAddAnswer({ indexAnswer, isAnswer, id: e.target.id });
  };

  const colorOption = isAnswer ? { color: 'blue' } : { color: 'red' };
  const hideOption = idOption === selectedIdOption ? null : { display: 'none' };
  const bgColorCheckmark = isAnswer ? null : { backgroundColor: 'red' };

  let order;
  switch (indexOption) {
    case 0:
      order = 'A';
      break;
    case 1:
      order = 'B';
      break;
    case 2:
      order = 'C';
      break;
    case 3:
      order = 'D';
      break;
    default:
      break;
  }
  return (
    <div className="app-answer__item" style={checkAnswer ? hideOption : null}>
      <label htmlFor={idOption} style={checkAnswer ? colorOption : null}>
        <input
          id={idOption}
          name={`question${indexAnswer + 1}`}
          type="radio"
          disabled={disabled}
          onChange={setAnswer}
          defaultChecked={idOption === selectedIdOption}
        />
        {order}: {nameoption}
        <span
          className="checkmark"
          style={checkAnswer ? bgColorCheckmark : null}
        />
      </label>
    </div>
  );
};

Option.propTypes = {
  indexOption: PropTypes.number.isRequired,
  nameoption: PropTypes.string.isRequired,
  idOption: PropTypes.number.isRequired,
  indexAnswer: PropTypes.number.isRequired,
  selectedIdOption: PropTypes.number.isRequired,
  isAnswer: PropTypes.bool.isRequired,
  checkAnswer: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onAddAnswer: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onAddAnswer: data => dispatch(addAnswer(data)),
});

export default React.memo(connect(null, mapDispatchToProps)(Option));
