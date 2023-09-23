import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { PostsContextProvider } from './context/PostsContext.jsx'
import firebase from 'firebase/compat/app'
import firebaseConfig from '../firebase.config.js'

firebase.initializeApp(firebaseConfig)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostsContextProvider>
        <App />
      </PostsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
