import { usePostsContext } from '../hooks/usePostContext'
import { useAuthContext } from '../hooks/useAuthContext'
import './PostDetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const PostDetails = ({ posts }) => {
  // const apiurl = 'http://localhost:8002'
  const apiurl = 'https://digital-wellness-brown.vercel.app'
  const { dispatch } = usePostsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    if(!posts.uname === user.username){
      return;
    }
   

    const response = await fetch(apiurl+'/api/posts/' + posts._id, {
      method: 'DELETE',
      headers: {
        // 'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_POST', payload: json})
      toast.success("Successfully deleted");
    }
  }

  return (
    <div className="workout-details">
      <ToastContainer/>

<div className="card">

<div className="card__footer">

      <div className="user">

        <img src={posts.profile} alt="user_image" className="user__image"/>

        <div className="user__info">
          <h5>{
          posts.uname == user.username ? 'You' : posts.uname
          }</h5>
          <small>{formatDistanceToNow(new Date(posts.createdAt), { addSuffix: true })}</small>
        </div>


      </div>
        {(user.username === posts.uname || user.username==='numan' ) &&
      <button className="material-symbols-outlined btn" onClick={handleClick}>Delete</button>}

</div>

    <div className="card__header">
      <img src={posts.img}  alt="card__image" className="card__image" />
    </div>

    <div className="card__body">
      {/* <span className="tag tag-blue">Technology</span> */}
      <h4 className='title'>{posts.title}</h4>
      <p>{posts.description}</p>

    </div>
    
  </div>

      {/* <h4>{posts.uname}</h4>
      <div className='pic'> 

      <img src={posts.profile} height='25px' alt="" />
      </div>
      <h4>{posts.title}</h4>
     
      <p><strong>description: </strong>{posts.description}</p>
      <p><img src={posts.img} alt="" /></p>
      <p>{formatDistanceToNow(new Date(posts.createdAt), { addSuffix: true })}</p>

     {user.username === posts.uname &&
      <button className="material-symbols-outlined" onClick={handleClick}>delete</button>} */}
    </div>
  )
}

export default PostDetails