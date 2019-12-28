import React from 'react';
import PropTypes from 'prop-types';

const QuestionOption = props => {
  const { index } = props;
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
      <label htmlFor={index}>
        <input id={index} name="answer" type="radio" />
        {order}: dfdsfdsfdsfd
        <span className="checkmark" />
      </label>
    </div>
  );
};

QuestionOption.propTypes = {
  index: PropTypes.number.isRequired,
};

export default QuestionOption;
