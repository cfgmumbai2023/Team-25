import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import Bottom from './components/Bottom'
import Navbar from './components/Navbar'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Profile from './ProfilePage/Profile'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Courses from './components/Courses'
import Aboutus from './components/Aboutus'
import CourseLanding from './components/CourseLanding'


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('guitaraUser')
    if (user) {
      const user1 = JSON.parse(user)
      setUser(user1)
      setIsAuthenticated(true)
    } else {
      console.log('in else  of app.jsx')
    }
  }, [isAuthenticated])

  console.log(user)

  return (
   
    <div style={{
      display: 'flex',
      justifyContent: 'Right',
      alignItems: 'Right',
      height: '100vh'
    }}>
      <Navbar isAuthenticated={isAuthenticated} user={user} />
      <Routes >
        <Route 
          exact
          path='/'
          element={<Home isAuthenticated={isAuthenticated} />}
        ></Route>
        <Route
          exact
          path='/profile'
          element={<Profile isAuthenticated={isAuthenticated} />}
        ></Route>
        <Route
          exact
          path='/login'
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        ></Route>
        <Route exact path="/Aboutus" element={<Aboutus/>}/>
        <Route exact path="/courses" element={<Courses/>}/>
        <Route exact path="/CourseLanding" element={<CourseLanding/>}/>
      </Routes>
      
      <Bottom />
      
    </div>
    
  )
}


