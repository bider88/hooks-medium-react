import React, { useState, useEffect } from 'react';

const UseEffectHookHttp = () => {

  const [ users, setUsers ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        setUsers(users);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Hook - useEffect realizando peticiones http</h5>
        <h6 className="card-subtitle mb-2 text-muted">Se harán peticiones HTTP con useEffect</h6>
        { isLoading && (
          <div className="text-center my-2">
            <div className="spinner-border text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        <ul className="list-group">
          {
            users.map(user => <li className="list-group-item list-group-item-info" key={user.id}>{user.name}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default UseEffectHookHttp;