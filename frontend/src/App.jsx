import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import Bottom from './components/Bottom'
import Navbar from './components/Navbar'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import './App.css'

function App() {
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
    <div>
      <Navbar isAuthenticated={isAuthenticated} user={user} />
      <Routes>
        <Route
          exact
          path='/'
          element={<Home isAuthenticated={isAuthenticated} />}
        ></Route>
        <Route
          exact
          path='/login'
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        ></Route>
      </Routes>
      <Bottom />
    </div>
  )
}

export default App