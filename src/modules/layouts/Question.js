import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { onSelectedQuestion } from '../ActionQuestion';

const Question = props => {
  const { id, content, listOption, selected } = props;
  const [idOption, setIdOption] = useState(0);
  const dispatch = useDispatch();

  const handleChangeOption = idOptionSelected => {
    setIdOption(idOptionSelected);
    dispatch(onSelectedQuestion(id, idOptionSelected));
  };

  const checkSelectedQuestion = option => {
    if (idOption !== 0 && idOption === option.id) return true;
    if (idOption === 0 && selected && selected === option.id) return true;
    return false;
  };

  const renderOptionsQuestion = listOption.map(option => {
    return (
      <div className="option-item" key={option.id}>
        <input
          type="radio"
          name="radioQuestion"
          id={`option${option.id}`}
          value={option.contentOption}
          onChange={() => {
            handleChangeOption(option.id);
          }}
          checked={checkSelectedQuestion(option)}
        />
        <label htmlFor={`option${option.id}`}>{option.contentOption}</label>
      </div>
    );
  });

  return (
    <div className="question-input row">
      <h1>Câu hỏi {id}</h1>
      <h3>{content}</h3>
      <div className=" question-options">{renderOptionsQuestion}</div>
    </div>
  );
};

Question.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  selected: PropTypes.number.isRequired,
  listOption: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      contentOption: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Question;
