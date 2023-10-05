import React,{useEffect} from 'react'
import PostForm from '../components/PostForm'
import PostDetails from '../components/PostDetails'

//mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useAuthContext } from "../hooks/useAuthContext"
import { usePostsContext } from '../hooks/usePostContext'


const Community = () => {

    // const apiurl = 'http://localhost:8002'
    const apiurl = 'https://digital-wellness-brown.vercel.app'
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
       <div className="community" >

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
