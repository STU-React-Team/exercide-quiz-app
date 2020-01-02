import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { onNextQuestion, onPrevQuestion, getResult } from '../ActionQuestion';

const BarButtonAction = props => {
  const { currentQuestion } = props;
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentQuestion === 1) {
      setDisablePrev(true);
    } else {
      if (currentQuestion < 10) {
        setDisablePrev(false);
        setDisableNext(false);
      }
      if (currentQuestion === 10) {
        setDisableNext(true);
      }
    }
  }, [currentQuestion, setDisableNext, setDisablePrev]);
  const handleGetResult = () => {
    // eslint-disable-next-line no-alert
    if( window.confirm("Are U SURE !!!! ???") ){
      dispatch(getResult())
    }
  };

  return (
    <div className="container-fluid bar-button">
      <div className="container">
        <div className="bar-button-wrapper row">
          <div className="col-xl-8 col-md-8 col-8">
            <button
              type="button"
              className="btn-prev"
              onClick={() => dispatch(onPrevQuestion())}
              disabled={disablePrev}>
              <i className="fas fa-arrow-left" />
              Preview
            </button>
            <button
              type="button"
              onClick={() => dispatch(onNextQuestion())}
              disabled={disableNext}>
              Next
              <i className="fas fa-arrow-right" />
            </button>
          </div>
          <div className="col-xl-4 col-md-4 col-4">
            <button
              type="button"
              onClick={handleGetResult}
            >
              Result
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

BarButtonAction.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
};

const mapStatetoProps = state => {
  return {
    currentQuestion: state.reducerQuestion.currentQuestion,
  };
};

export default connect(mapStatetoProps, null)(BarButtonAction);
