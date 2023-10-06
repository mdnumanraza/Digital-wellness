import React from 'react'
import AdminReports from '../components/AdminReports'
import Users from '../components/AdminDashboard/Users'

const AdminDashboard = () => {
  return (
    <div className='AdminDashboard'>
      <AdminReports/>
      <Users/>
    </div>
  )
}

export default AdminDashboard
