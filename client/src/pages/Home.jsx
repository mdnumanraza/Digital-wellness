import { useEffect }from 'react'

import { useAuthContext } from "../hooks/useAuthContext"



const Home = () => {
  const {user} = useAuthContext()

  return (
    <div className="">
      <div className=''>
        <h1>Welcome {user.username}</h1>
       </div>
    </div>
  )
}

export default Home