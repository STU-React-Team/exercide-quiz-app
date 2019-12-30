import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnswer } from 'redux/actions/';
import PropTypes from 'prop-types';

const Option = props => {
  const { index, name, id, indexAnswer, isAnswer, selected, disabled } = props;
  const dispatch = useDispatch();
  const setAnswer = e => {
    dispatch(addAnswer({ indexAnswer, isAnswer, id: e.target.id }));
  };
  let order;
  switch (index) {
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
      <label htmlFor={id}>
        <input
          id={id}
          name={`question${indexAnswer + 1}`}
          type="radio"
          disabled={disabled}
          onChange={setAnswer}
          defaultChecked={id === selected}
        />
        {order}: {name}
        <span className="checkmark" />
      </label>
    </div>
  );
};

Option.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  indexAnswer: PropTypes.number.isRequired,
  selected: PropTypes.number,
  isAnswer: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

Option.defaultProps = {
  selected: 0,
};

export default React.memo(Option);
