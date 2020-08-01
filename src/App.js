import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/commons/Navbar';

const App = () => {

  const [state, setState] = useState({
    clicks: 0
  })

  const addClicks = () => {
    setState({
      clicks: state.clicks + 1
    })
  }

  return (
    <div>
      <Header/>
      <div className="jumbotron bg-info text-white">
        <h1 className="display-4">Hooks en React</h1>
        <p className="lead">Componentes funcionales</p>
        <hr className="my-4"/>
        <p>Se muestra como crear componentes funcionales, basados en funciones con todos los beneficios de las clases.</p>
      </div>
      <div className="container">
        <button className="btn btn-primary" onClick={addClicks}>Clicks ({ state.clicks })</button>
      </div>
    </div>
  )
}

export default App;
