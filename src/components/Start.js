import React from 'react';
import quizUImages from './../assets/images/onlineExamQuiz.png';
const Start = ({ onQuizStart }) =>
  <div className="card">
    <div className="card-content">
      <div className="content">
        <h1>Тест на знание основ React JS</h1>
        <img src={quizUImages} className="quizUImages" />
        <p>Удачи!</p>
        <button className="button is-info is-medium" onClick={onQuizStart}>Начать тест</button>
      </div>
    </div>
  </div>

export default Start;