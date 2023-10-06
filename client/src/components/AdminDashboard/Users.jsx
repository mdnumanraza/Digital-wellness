import React, { useEffect, useState } from 'react'
import './Users.css'
const Users = () => {
    const apiurl = 'https://digital-wellness-brown.vercel.app'
    const [users, setUsers] = useState([]);

    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const response = await fetch(apiurl+'/api/user/');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []); 


    // const handleDeleteUser = (userId) => {

    //     fetch(apiurl + `/api/user/${userId}`, {
    //       method: 'DELETE',
    //     })
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
            
    //         setUsers(users.filter((user) => user.id !== userId));
            
    //       })
    //       .catch((error) => {
    //         console.error('Error deleting user:', error);
    //       });
    //   };


    
  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <img src={user.image} alt={`${user.username}'s avatar`} className="user-avatar" />
          <div className="user-info">
            <h3 className="user-username">{user.username}</h3>
            <p className="user-email">{user.email}</p>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
