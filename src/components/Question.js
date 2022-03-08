import React, { useState, useEffect, useRef } from 'react';

const Question = ({ data, onTestUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError('');
    }
  }

  const nextClickHandler = (e) => {
    if (selected === '') {
      return setError('Please select one option!');
    }
    onTestUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  }

  return (
    <div className="cardQuestion">
      <div className="card-content">
        <div className="content">
          {data.type && <img src={data.image} className="imageQuestion" />}
          <h2 className="mb-5">{data.question}</h2>
          <div className="control" ref={radiosWrapper}>
            {data.options.map((choice, i) => (
              <label className="radio" key={i}>
                <input type="radio" name="test" value={choice} onChange={changeHandler} />
                {choice}
              </label>
            ))}
          </div>
          {error && <div className="has-text-danger">{error}</div>}
          <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Question;