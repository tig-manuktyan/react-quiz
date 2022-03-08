import React from 'react';

const Modal = ({ onClose, results, data }) =>
  <div className="modal is-active">
    <div className="modal-background" onClick={onClose}></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Ваши ответы</p>
        <button className="delete" onClick={onClose}></button>
      </header>
      <section className="modal-card-body content">
        <ul>
          {results.map((result, i) => (
            <li key={i} className="mb-6">
              <p>{result.q}</p>
              <p className={result.a === data[i].test ? 'has-background-success has-text-white p-2' : 'has-background-danger has-text-white p-2'}>Ваш ответ: {result.a}</p>
              {result.a !== data[i].test && <p className="has-background-link has-text-white p-2">Правильный ответ: {data[i].test}</p>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  </div>

export default Modal;