import React from 'react'
import { useState } from 'react';

import axios from 'axios';
const App = () => {

  //state
  let [users, setUsers] = useState([])
  //state for displaying error
  let [err, setError] = useState('')

  //make api call
  const loadUsers = async () => {
    axios.get("https://reqres.in/api/users?page=1")
      .then(response => setUsers(response.data.data))
      .catch(err => setError(err.message))
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My App</a>
          <button className="btn btn-warning" onClick={loadUsers} >Get Users</button>
        </div>
      </nav>
      <div className=' text-center'>
        <h1>Users</h1>
        {/* if err in api call dispaly error msg */}
        {err !== '' && <p className='h1 text-danger'>{err}</p>}
        {/* if customer array is empty, it should display a msg */}
        {/* {users.length==0 && <p className='h1 text-danger'>No user data</p>} */}
        {/* if user data is existed then render table */}
        {users.length !== 0 &&
          <table className="table text-center">
            <thead>
              <tr>
                <th>Id</th>
                <th>Email</th>
                <th>First_Name</th>
                <th>Last_Name</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((userObj) => (<tr key={userObj.id}>
                  <td>{userObj.id}</td>
                  <td>{userObj.email}</td>
                  <td>{userObj.first_name}</td>
                  <td>{userObj.last_name}</td>
                  <td>{userObj.avatar}</td>
                </tr>)
                )}
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}
export default App

