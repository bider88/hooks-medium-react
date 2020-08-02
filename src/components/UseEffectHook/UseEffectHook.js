import React, { useState, useEffect } from 'react';

const UseEffectHook = () => {

  const [ mouseX, setMouseX ] = useState(0);
  const [ mouseY, setMouseY ] = useState(0);

  const handleMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }

  useEffect(() => {
    // componentDidMount
    window.addEventListener('mousemove', handleMove);

    return () => {
      // componentWillUnmount
      window.removeEventListener('mousemove', handleMove);
    }
  })
  
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Hook - utilizando useEffect</h5>
        <h6 className="card-subtitle mb-2 text-muted">Use Effect simula el ciclo de vida.</h6>
        <p className="card-text">useEffect simula el ciclo de vida en los componentes basados en clases</p>
        <h2>X: { mouseX } Y: { mouseY }</h2>
      </div>
    </div>
  )
}

export default UseEffectHook;