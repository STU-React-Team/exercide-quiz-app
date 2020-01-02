import React, { useState, useEffect } from 'react';
import Question from 'components/question/';
import { showBtnFinish } from 'actions/';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Quiz = ({ listQuestion, isBtnFinish, onShowBtnFinish }) => {
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const { options, name } = listQuestion[indexQuestion];

  const onShowModal = e => {
    const dataSetShowModal = e.target.dataset.show_modal;
    setIsModal(Boolean(dataSetShowModal));
  };
  useEffect(() => {
    document.addEventListener('click', onShowModal);
    return () => document.removeEventListener('click', onShowModal);
  });

  const onPrevQuestion = e => {
    if (indexQuestion === 0) e.preventDefault();
    else setIndexQuestion(indexQuestion - 1);
  };
  const onNextQuestion = e => {
    if (indexQuestion === listQuestion.length - 1) e.preventDefault();
    else if (indexQuestion === listQuestion.length - 2) {
      onShowBtnFinish(true);
      setIndexQuestion(indexQuestion + 1);
    } else setIndexQuestion(indexQuestion + 1);
  };

  return (
    <div>
      {isModal ? (
        <div className="modal" data-show_modal="">
          <div className="modal__content">
            <span className="modal__close" data-show_modal="">
              &times;
            </span>
            <h2 className="app__heading">Are you finished?</h2>
            <div className="modal__btn">
              <Link to="/results" className="app__link">
                Ok
              </Link>
              <button
                className="app__link app__link--cancel"
                type="button"
                data-show_modal="">
                No
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <Question
        nameQuestion={name}
        indexQuestion={indexQuestion}
        options={options}
        disabledOption={false}
        checkAnswer={false}
      />

      <div className="app__control">
        <div>
          <button
            className={
              indexQuestion < 1 ? 'app__link app__link--disable' : 'app__link'
            }
            type="button"
            onClick={onPrevQuestion}>
            Prev
          </button>
        </div>
        <div>
          <button
            className={
              indexQuestion > 8 ? 'app__link app__link--disable' : 'app__link'
            }
            type="button"
            onClick={onNextQuestion}>
            Next
          </button>
        </div>
        <div>
          {isBtnFinish && (
            <button className="app__link" data-show_modal type="button">
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Quiz.propTypes = {
  listQuestion: PropTypes.instanceOf(Array).isRequired,
  isBtnFinish: PropTypes.bool.isRequired,
  onShowBtnFinish: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  listQuestion: state.questions,
  isBtnFinish: state.isBtnFinish,
});

const mapDispatchToProps = dispatch => ({
  onShowBtnFinish: data => dispatch(showBtnFinish(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
