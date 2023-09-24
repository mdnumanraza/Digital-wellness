import React ,{useState} from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
// import addNotification from 'react-push-notification'

const Report = () => {
    // const apiurl = 'http://localhost:8002'
    const apiurl = 'https://digital-wellness-brown.vercel.app'
    const loadgif = 'https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'

    const { user } = useAuthContext()

    // const [load, setLoad] = useState("Submit");
    const [rname, setRname] = useState("");
    const [descrip, setDescrip] = useState("");
    const [ss, setSs] = useState("");
    const [email, setEmail] = useState("");

    const handleupload = async(e)=>{
        const selectedFile = e.target.files[0];
        if(selectedFile){
          const storageRef =  firebase.storage().ref()
          const fileRef = storageRef.child(selectedFile.name)
    
          await fileRef.put(selectedFile)
          .then((snapshot)=>{
            snapshot.ref.getDownloadURL()
            .then((downloadURL)=>{
              console.log(downloadURL);
              setSs(downloadURL);
              // setLoad('Submit')
              
            })
          })
        }else{
          toast.error("Please select image to upload")
         
        }
     }

  
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        if (!user) {
          setError('You must be logged in')
          return
        }
    
        const report = {rname, descrip, email,ss}
    
    
        const response = await fetch(apiurl +'/api/reports', {
          method: 'POST',
          body: JSON.stringify(report),
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${user.token}`
          }
        })
        const json = await response.json()
    
        if (!response.ok) {
          setError(json.error)
          setEmptyFields(json.emptyFields)
        }
        if (response.ok) {

          // addNotification({
          //   title:`new report from ${rname}`,
          //   message:descrip,
          //   duration:5000,
          //   native:true,
          //   onClick: ()=>{console.log('Notification')}        
          // })
          setRname('')
          setDescrip('')
          setSs('')
          setError(null)
          setEmptyFields([])
          alert('Reported successfully')
        //   dispatch({type: 'CREATE_POST', payload: json})
        }
      }

  return (
    <div>
       <form className="login" onSubmit={handleSubmit}>
      <h3>Cyber Bulling Report</h3>

      <label>Name:</label>
      <input
        type="text"
        onChange={(e) => setRname(e.target.value)}
        value={rname}
      />
       <div className=" flex justify-center py-4">
        <label htmlFor="profile">
          Screen Shots:
          <input
            
            type="file"
            id="profile"
            onChange={handleupload}
            name=""
          />
        </label>
      </div>
      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
     
      <label>Report:</label>
      <input
        type="text"
        onChange={(e) => setDescrip(e.target.value)}
        value={descrip}
      />

      <button>
      Submit
      </button>
    </form>
    </div>
  )
}

export default Report
