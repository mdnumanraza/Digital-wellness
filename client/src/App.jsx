import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import Signup from "./pages/Signup";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProfilePage from './pages/Profile';
import Community from './pages/Community';
import Report from './pages/Report';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
import Consult from './pages/Consult';
import PageNotFound from './pages/PageNotFound';
import { useAuthContext } from './hooks/useAuthContext'

function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>

            <Route 
             exact path="/" 
              // element={user ? <Home /> : <Navigate to="/login" />} 
              element={user ? <Home /> : <Login />} 
            />

            <Route 
              path="/login" 
              element={!user ? <Login /> : <Home/>} 
            />

            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Home />} 
            />

            <Route 
              exact path="/profile" 
              element={user ? <ProfilePage/> : <Login />} 
            />
            <Route 
              path="/community" 
              // element={user ? <Community/> : <Navigate to="/login" />} 
              element={user ? <Community/> : <Login />} 
            />
            <Route 
              path="/report" 
              element={user ? <Report/> : <Login />} 
            />
            
            { (user && user.username==='numan' ) &&
              <Route 
              path="/admin" 
              element={<AdminDashboard/> } 
            />}

            <Route 
              path="/consult" 
              element={
                
               user ? <Consult/> : <Login />} 
            />

            <Route path='*' element={<PageNotFound/>}/>

          </Routes>
        </div>
        {user &&
          <Footer/>
        }
      </BrowserRouter>

    </div>
  );
}

export default App;
