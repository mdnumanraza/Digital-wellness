import React, { useState } from 'react'
import './AdminDashboard.css'
import AdminReports from '../components/AdminDashboard/AdminReports'
import Users from '../components/AdminDashboard/Users'

const AdminDashboard = () => {

  const [isUserSectionOpen, setUserSectionOpen] = useState(false);
  const [isSection1Open, setSection1Open] = useState(false);
  const [isSection2Open, setSection2Open] = useState(false);


  const handleUserSectionToggle = () => {
    setUserSectionOpen(!isUserSectionOpen);
  };

  const handleSection1Toggle = () => {
    setSection1Open(!isSection1Open);
  };

  const handleSection2Toggle = () => {
    setSection2Open(!isSection2Open);
  };

  return (
    <div className='AdminDashboard'>

    {/* <div className="admin-dashboard"> */}
      <h1>Admin Dashboard</h1>

      <div>

      
      <button onClick={handleUserSectionToggle}>
        {isUserSectionOpen ? 'Hide Users' : 'Show Users'}
      </button>
      

      <button onClick={handleSection1Toggle}>
        {isSection1Open ? 'Hide Reports' : 'Show Reports'}
      </button>

      <button onClick={handleSection2Toggle}>
        {isSection2Open ? 'Hide Verifications' : 'Show Verifications'}
      </button>

      </div>


<div>
      {isUserSectionOpen && (
        <div className="user-section">
          <center><h2>Users</h2></center>
          <Users/>  
        </div>
      )}


  
      {isSection1Open && (
        <div className="section">
          <AdminReports/>
        </div>
      )}
  

      {isSection2Open && (
        <div className="section">
          <h2>Users Verification</h2>
        
        </div>
      )}


      </div>

    </div>
  
     
    // </div>
  )
}

export default AdminDashboard
