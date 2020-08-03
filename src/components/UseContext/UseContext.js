import React, { useState, useContext } from 'react';

// { Provider, Consumer }
const MyContext = React.createContext();

// Consumir context de manera tradicional
// const GrandSon = () => (
//   <MyContext.Consumer>
//     {(context) => (
//       <div>
//         <p>Nieto { context.num }</p>
//         <button className="btn btn-primary float-right" onClick={context.addNum}>Despachador nieto</button>
//       </div>
//     )}
//   </MyContext.Consumer>
// );

const GrandSon = () => {

  // const context = useContext(MyContext);
  const { num, addNum } = useContext(MyContext);

  return (
    <div>
      <p>Nieto { num }</p>
      <button className="btn btn-primary float-right" onClick={ addNum }>Despachador nieto</button>
    </div>
  )
};

const Child = () => (
  <div className="mt-2">
    <p>Hijo</p>
    <GrandSon/>
  </div>
);

const UseContext = () => {

  const [ num, setNum ] = useState(0);

  const addNum = () => setNum(num + 1);

  return (
    <MyContext.Provider value={{
      num,
      addNum
    }}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Hook - useContext</h5>
          <h6 className="card-subtitle mb-2 text-muted">Veremos como usar useContext</h6>
          <button className="btn btn-primary float-right" onClick={addNum}>App ({num})</button>
          <br/>
          <Child/>
        </div>
      </div>
    </MyContext.Provider>
  )
}

export default UseContext;