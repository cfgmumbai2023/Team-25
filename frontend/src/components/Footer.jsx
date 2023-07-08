

import React from "react"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <div>
            
<footer class="text-center text-lg-start bg-light text-muted">

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
 
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
  
    <div>
      <Link to="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </Link>
      <Link to="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </Link>
      <Link to="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </Link>
      <Link to="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </Link>
      <Link to="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </Link>
      <Link to="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </Link>
    </div>
   
  </section>
  
  <section class="">
    <div class="container text-center text-md-start mt-5">
  
      <div class="row mt-3">
      
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Indian Football Foundation
          </h6>
          <p>
            Foundation for coaches to provide quality football training to the youth of india
          </p>
        </div>
       
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Services
          </h6>
          <p>
            <Link to="/"  class="text-reset">Home</Link>
          </p>
          <p>
            <Link to="/Aboutus" class="text-reset">About us</Link>
          </p>
          <p>
            <Link to="/" class="text-reset">Courses</Link>
          </p>
          <p>
            <Link to="/Blogs" class="text-reset">Blogs</Link>
          </p>
        </div>
       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Useful 
          </h6>
          <p>
            <Link to="/Courses" class="text-reset">Courses</Link>
          </p>
          <p>
            <Link to="/Blogs" class="text-reset">Blogs</Link>
          </p>
          <p>
            <Link to="/Interview" class="text-reset">Interview</Link>
          </p>
          <p>
            <Link to="/Profile" class="text-reset">Profile</Link>
          </p>
        </div>
        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
          <h6 class="text-uppercase fw-bold mb-4">Connect with us</h6>
          <p><i class="fas fa-home me-3"></i>Khasra No. 382, Third Floor, Village Ghitorni,
New Delhi – 110030</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@indianfootballfoundation.org
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          
        </div>
      
      </div>
   
    </div>
  </section>





  <div class="text-center p-4" >

    © 2021 Copyright:
    <Link class="text-reset fw-bold" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
  </div>

</footer>

        </div>
    )
}