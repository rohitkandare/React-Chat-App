import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { USER_SERVER } from '../../Config'


function LandingPage() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`${USER_SERVER}/test`);
    setUser(result.data.reverse());
  };
  const user = useSelector(state => state.user)
  if (user.userData && !user.userData.isAuth) {
    return (
      <>
        <div className="app">
          <span style={{ fontSize: '2rem' }}>Welcome To App</span>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="container">
          <div className="py-4">
            <h1>ALL USERS LIST</h1>
            <table className="table border shadow">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    )

  }
}

export default LandingPage
