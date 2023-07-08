import React from 'react'
import {Link} from 'react-router-dom'

export default function nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">Football</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blogs">Blogs</Link>
              </li>
              <li className="nav-item"ul class="navbar-nav ms-auto me-auto ml-auto">
                <Link className="nav-link" to="/Interview">Interview</Link>
              </li>
              
              
            </ul>
            
          </div>
        </div>
      </nav>
    </div>


  )
}
