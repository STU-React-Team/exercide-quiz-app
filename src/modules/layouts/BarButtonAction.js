import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  onNextQuestion,
  onPrevQuestion,
  getResult,
} from 'modules/ActionQuestion';

const BarButtonAction = props => {
  const {
    currentQuestion,
    getResultDisp,
    onNextQuestionDisp,
    onPrevQuestionDisp,
  } = props;
  
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);

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
  }, [currentQuestion]);

  const handleGetResult = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are U SURE !!!! ???')) {
      getResultDisp();
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
              onClick={() => onPrevQuestionDisp()}
              disabled={disablePrev}>
              <i className="fas fa-arrow-left" />
              Preview
            </button>
            <button
              type="button"
              onClick={() => onNextQuestionDisp()}
              disabled={disableNext}>
              Tiếp Theo
              <i className="fas fa-arrow-right" />
            </button>
          </div>
          <div className="col-xl-4 col-md-4 col-4">
            <button type="button" onClick={handleGetResult}>
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
  getResultDisp: PropTypes.func.isRequired,
  onPrevQuestionDisp: PropTypes.func.isRequired,
  onNextQuestionDisp: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  currentQuestion: state.reducerQuestion.currentQuestion,
});
const mapDispatchtoProps = dispatch => ({
  getResultDisp: () => dispatch(getResult()),
  onNextQuestionDisp: () => dispatch(onNextQuestion()),
  onPrevQuestionDisp: () => dispatch(onPrevQuestion()),
});
export default connect(mapStatetoProps, mapDispatchtoProps)(BarButtonAction);
