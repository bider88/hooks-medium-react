import React, { useState } from 'react';
import { useEffect } from 'react';

const UseEffectControl = () => {

  const [ click, setClick ] = useState(0);
  const [ emoji, setEmoji ] = useState('🐶');

  useEffect(() => {
    console.log('useEffect - se invoca la primera vez y cada vez que cambie el valor de la variable \'click\'');
    console.log('%c--------------------------------------', 'color: green');
  }, [ click ])

  const handleClick = () => {
    setClick(click + 1);
  }

  const toggleEmoji = () => {
    setEmoji( emoji === '🐶' ? '🙈' : '🐶' )
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Hook - useEffect controlado</h5>
        <h6 className="card-subtitle mb-2 text-muted">Estaremos controlando cuando se ejecuta useEffect</h6>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary mr-3" onClick={handleClick}>Clicks ({ click })</button>
          <button className="btn btn-primary" onClick={toggleEmoji}>Cambiar emoji</button>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <h2>{ emoji }</h2>
        </div>
      </div>
    </div>
  )
}

export default UseEffectControl;