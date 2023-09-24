import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import React, { useState,useEffect } from "react";
import './AdminReports.css'
// import { ToastContainer, toast } from 'react-toastify';

const Reports = () => {
  const [rep , setRep] = useState([])
  const apiurl = 'http://localhost:8002'

  const fetchreports = async()=>{
    try{
      const response = await fetch(apiurl+'/api/reports/');
      const json = await response.json();

      if(response.ok){
        setRep(json);
      }
    } catch (error) {
      console.log(error);
    }
  }
useEffect( ()=>{ fetchreports();},[])


// delete
const handleDelete = async (id) => {
  
  try {
    //fetching api to delete by id
    const response = await fetch(apiurl +'/api/reports/' + id, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json',
      },
    });

    const json = await response.json();
    if (response.ok) {
      alert(`successfully Reviewed`);
        // toast.warn("Task deleted successfully");
      
      // Remove the deleted todo from the state
      setRep(
        (prevRep) => {
            prevRep.filter((rep) => rep._id !== id)
        }    
        );
    }
    fetchreports();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="message-list">
       {/* <ToastContainer /> */}
      <h2>Report List</h2>
      <ul>
        {rep && rep.map((rep) => (
          
          <div className='li' key={rep.id}>

            <div className="message-header">
              <span className="username">{rep.rname}</span>
            </div>

            <img src={rep.ss} alt="ss" width='300px' />
            <div className={`description`}>
              {/* <p> */}

              {rep.descrip}
              {/* </p> */}
            </div>

            <button className="btn" onClick={() => handleDelete(rep._id)}>Delete</button>
            <p className={`description`}>
              {rep.email}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
