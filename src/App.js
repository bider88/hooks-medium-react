import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/commons/Navbar';
import BooleanState from './components/BooleanState';
import ObjectState from './components/ObjectState/ObjectState';
import UseEffectHook from './components/UseEffectHook';
import UseEffectControl from './components/UseEffectControl';

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
    <div className="mb-5">
      <Header/>
      <div className="jumbotron bg-info text-white">
        <h1 className="display-4">Hooks en React</h1>
        <p className="lead">Componentes funcionales</p>
        <hr className="my-4"/>
        <p>Se muestra como crear componentes funcionales, basados en funciones con todos los beneficios de las clases.</p>
      </div>
      <div className="container mb-5">
        <button className="btn btn-primary" onClick={addClicks}>Clicks ({ state.clicks })</button>
        <BooleanState/>
        <ObjectState/>
        <UseEffectHook/>
        <UseEffectControl/>
      </div>
    </div>
  )
}

export default App;
