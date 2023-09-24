import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import React, { useState,useEffect } from "react";
import './AdminReports.css'
import addNotification from 'react-push-notification';
// import { ToastContainer, toast } from 'react-toastify';

const Reports = () => {
  const [rep , setRep] = useState([])
  // const apiurl = 'http://localhost:8002'
  const apiurl = 'https://digital-wellness-brown.vercel.app'

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
        addNotification({
          title:`Your issue resolved`,
          message:'Go to Digital wellness website for more',
          duration:5000,
          native:true,
          onClick: ()=>{console.log('Notification')}        
        })
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
             
            </div>
            ScreenShot : 
            <img src={rep.ss} alt="ss" width='300px' />
            <div className={`description`}>
              {/* <p> */}

             <strong> Report :</strong> {rep.descrip}
              {/* </p> */}
            </div>

            <button className="btn" onClick={() => handleDelete(rep._id)}>Resolved</button>
            <p className={`description`}>
              {rep.email}
              <br />
              Victim name :
              <span className="username">{rep.rname}</span>
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
