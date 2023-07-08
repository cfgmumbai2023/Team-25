import React, { useState, useEffect } from 'react'
import logo from '../images/Guitara-logo1.png'
import avatar from '../images/avatar.svg'

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
      <a href='/' className='logo'>
        <img src={logo} alt='' />
      </a>
      <input type='checkbox' className='menu-btn' id='menu-btn' />
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li>
          <a href='/exercises'>Exercises</a>
        </li>
        <li>
          <a href='/lessons'>Lessons</a>
        </li>
        <li>
          <a href='/tools'>Tools</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          {isAuthenticated && path === '/community' ? (
            <li>
              <a href='/community/createPost' className='active'>
                CreatePost
              </a>
            </li>
          ) : (
            <a href='/community'>Community</a>
          )}
        </li>

        {isAuthenticated ? (
          <div className='new'>
            <div className='avatar'>
              <a href='/community/profile'>
                <img src={avatar} alt='' />
              </a>
            </div>
            <li>
              <a href='/login' className='active' onClick={deleteItem}>
                Logout
              </a>
            </li>
            {path === '/community' ? <div></div> : <div></div>}
          </div>
        ) : (
          <li>
            <a href='/login' className='active'>
              Login
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
