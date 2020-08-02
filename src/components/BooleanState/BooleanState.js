import React, { useState } from 'react';

const BooleanState = () => {

  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active)
  }

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Hook use state con boolean</h5>
        <h6 className="card-subtitle mb-2 text-muted">Actualizamos el estado con un boolean</h6>
        { active && <p className="card-text">Este valor se muestra cuando esta actvio</p> }
        <button className="btn btn-primary" onClick={toggle}>{ active ? 'Desactivar' : 'Activar' }</button>
      </div>
    </div>
  )
}

export default BooleanState;