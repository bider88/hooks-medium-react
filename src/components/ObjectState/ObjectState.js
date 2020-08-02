import React, { useState } from 'react';

const ObjectState = () => {

  const [click, setClick] = useState(0);
  const [title, setTitle] = useState('');

  const addClicks = () => {
    setClick(click + 1)
  }

  const handleInput = (e) => {
    setTitle(e.target.value);
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Hook use state con objectos</h5>
        <h6 className="card-subtitle mb-2 text-muted">Actualizamos el estado con un objecto</h6>
        <h2>{ title }</h2>
        <input className="form-control mb-2" type="text" value={title} onChange={handleInput}/>
        <button className="btn btn-primary float-right" onClick={addClicks}>clicks ({ click })</button>
      </div>
    </div>
  )
}

export default ObjectState;