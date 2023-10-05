import { useAuthContext } from "../hooks/useAuthContext"
import { usePostsContext } from '../hooks/usePostContext'
import HomePage from "./Homepage"


const Home = () => {
  // const apiurl = 'http://localhost:8002'
  const apiurl = 'https://digital-wellness-brown.vercel.app'
  const {posts, dispatch} = usePostsContext()
  const {user} = useAuthContext()

 

  return (
    <div className="home">
   
      <HomePage/>
    </div>
  )
}

export default Home