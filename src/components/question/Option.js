import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnswer } from 'redux/actions/';
import PropTypes from 'prop-types';

const Option = props => {
  const {
    indexOption,
    nameoption,
    id,
    indexAnswer,
    isAnswer,
    selected,
    disabled,
    checkAnswer,
  } = props;
  const dispatch = useDispatch();

  const setAnswer = e => {
    dispatch(addAnswer({ indexAnswer, isAnswer, id: e.target.id }));
  };

  const colorOption = isAnswer ? { color: 'blue' } : { color: 'red' };

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
    <div className="app-answer__item">
      <label htmlFor={id} style={checkAnswer ? colorOption : null}>
        <input
          id={id}
          name={`question${indexAnswer + 1}`}
          type="radio"
          disabled={disabled}
          onChange={setAnswer}
          defaultChecked={id === selected}
        />
        {order}: {nameoption}
        <span className="checkmark" />
      </label>
    </div>
  );
};

Option.propTypes = {
  indexOption: PropTypes.number.isRequired,
  nameoption: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  indexAnswer: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  isAnswer: PropTypes.bool.isRequired,
  checkAnswer: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default React.memo(Option);
