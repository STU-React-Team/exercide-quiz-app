import React, { useState, useEffect } from 'react';
import Question from 'components/Question';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { questions } = useSelector(state => state);
  const { options, name } = questions[indexQuestion];

  const onShowModal = e => {
    const dataShowModal = e.target.dataset.show_modal;
    setShowModal(Boolean(dataShowModal));
  };

  useEffect(() => {
    document.addEventListener('click', onShowModal);
    return () => {
      document.removeEventListener('click', onShowModal);
    };
  });

  const onPrevQuestion = e => {
    if (indexQuestion === 0) e.preventDefault();
    else setIndexQuestion(indexQuestion - 1);
  };
  const onNextQuestion = e => {
    if (indexQuestion === 9) e.preventDefault();
    else setIndexQuestion(indexQuestion + 1);
  };

  return (
    <div>
      {showModal ? (
        <div className="modal" data-show_modal="">
          <div className="modal__content">
            <span className="modal__close" data-show_modal="">
              &times;
            </span>
            <h2 className="app__heading">Are you finished?</h2>
            <div className="modal__btn">
              <Link to="/" className="app__link">
                Agree
              </Link>
              <button
                className="app__link app__link--cancel"
                type="button"
                data-show_modal="">
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <Question
        name={name}
        indexQuestion={indexQuestion}
        options={options}
        disabled={false}
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
          <button className="app__link" data-show_modal type="button">
            Finish
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
      </div>
    </div>
  );
};

export default Quiz;
