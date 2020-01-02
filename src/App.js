import React from 'react';
import './App.css';
import BarButtonAction from './modules/layouts/BarButtonAction';
import Header from './modules/layouts/Header';
import QuestionWrapper from './modules/layouts/QuestionWrapper';
import Result from './modules/layouts/Result';
import './modules/layouts/QuestionStyle.css';

function App() {
  return (
    <div className="App">
      <Header />
      <QuestionWrapper />
      <BarButtonAction />
      <Result />
    </div>
  );
}

export default App;
