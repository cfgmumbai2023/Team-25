import React, { useState, useEffect } from 'react'
// import logo from '../images/football.png'
import { Link } from 'react-router-dom'


function Navbar({ isAuthenticated, user }) {
  // const [nav, setnav] = useState(false);

  // const changeBackground = () => {
  //   if (window.scrollY >= 50) {
  //     setnav(true);
  //   } else {
  //     setnav(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    console.log(isAuthenticated)
  }, [isAuthenticated])

  const deleteItem = () => {
    localStorage.clear()
  }

  var path = window.location.pathname
  console.log(path === '/community')
  return (
    <nav className='nav'>
      <Link to='/' className='logo'>
        {/* <img src={logo} alt='' /> */}<h1 >Football</h1>
      </Link>
      <input type='checkbox' className='menu-btn' id='menu-btn' />
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Aboutus'>About</Link>
        </li>
        <li>
          <Link to='/courses'>Courses</Link>
        </li>
        <li>
          <Link to='/blogs'>Blogs</Link>
        </li>
        <li>
          <Link to='/interview'>Interview</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
       

        {isAuthenticated ? (
          <div className='new'>
            
            <li>
              <Link to='/login' className='active' onClick={deleteItem}>
                Logout
              </Link>
            </li>
            
          </div>
        ) : (
          <li>
            <Link to='/login' className='active'>
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
