import React,{useEffect} from 'react'
import PostForm from '../components/PostForm'
import PostDetails from '../components/PostDetails'

import { useAuthContext } from "../hooks/useAuthContext"
import { usePostsContext } from '../hooks/usePostContext'


const Community = () => {

    const apiurl = 'http://localhost:8002'
    const {posts, dispatch} = usePostsContext()
    const {user} = useAuthContext()

     useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(apiurl + '/api/posts', {
        // headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_POSTS', payload: json})
      }
    }

    if (user) {
      fetchPosts()
    }
  }, [dispatch, user])
  return (
    <div>
       <div className="home">

        <div className="postform">
        <PostForm />
        </div>

      <div className="workouts">
        {posts && posts.map((posts) => (
          <PostDetails key={posts._id} posts={posts} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Community
