import React, { useEffect, useState } from 'react';

import { formatTime } from '../utils';

const End = ({ results, data, onReset, onTestCheck, time }) => {
  const [correctTest, setCorrectTest] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].test) {
        correct++;
      }
    });
    setCorrectTest(correct);
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Ваши результаты</h3>
          <p>
            {`Вы ответили правильно на ${correctTest} из ${data.length} вопросов`}
          </p>
          <p><strong>{Math.floor((correctTest / data.length) * 100)}%</strong></p>
          <p><strong>Твое время:</strong> {formatTime(time)}</p>
          <div className='btnGroup'>
            <button className="button is-info mr-2 btnEnd" onClick={onTestCheck}>Проверьте свои тесты</button>
            <button className="button is-success btnEnd" onClick={onReset}>Попробуйте снова</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default End;