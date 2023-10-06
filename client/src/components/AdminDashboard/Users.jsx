import React, { useEffect, useState } from 'react'
import './Users.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Users = () => {
    const apiurl = 'https://digital-wellness-brown.vercel.app'
    const [users, setUsers] = useState([]);

    const handleDeleteUser = (userId) => {

        fetch(apiurl + `/api/user/${userId}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            
            setUsers(users.filter((user) => user._id !== userId));
            toast.success("Successfully deleted");
            
          })
          .catch((error) => {
            console.error('Error deleting user:', error);
          });
      };

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
    }, [handleDeleteUser]); 



    
  return (
    <div className="user-list">
        <ToastContainer/>
      {users.map((user) => (
        <div className="user-card" key={user._id}>
          <img src={user.image} alt={`${user.username}'s avatar`} className="user-avatar" />
          <div className="user-info">
            <h3 className="user-username">{user.username}</h3>
            <p className="user-email">{user.email}</p>
            <button className='deleteBtn' onClick={() => handleDeleteUser(user._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
