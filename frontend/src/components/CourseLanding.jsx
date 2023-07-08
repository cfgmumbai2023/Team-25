import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "@mui/material/Rating";
import {useParams} from 'react-router-dom'

const LandingPage = () => {
  


  return (
    <div className="row m-4 p-4">
      <div className="col-sm-9 my-4 p-4 bg-light">
        <h1 className="m-4">
          Automate the Boring Stuff with Python Programming
        </h1>
        <p className="text-muted m-4">
        If you're an office worker, student, administrator, or just want
              to become more productive with your computer, programming will
              allow you write code that can automate tedious tasks. This course
              follows the popular (and free!) book, Automate the Boring Stuff
              with Python. Automate the Boring Stuff with Python was written for
              people who want to get up to speed writing small programs that do
              practical tasks as soon as possible. You don't need to know
              sorting algorithms or object-oriented programming, so this course
              skips all the computer science and concentrates on writing code
              that gets stuff done.
        
        </p>

        <div class="p-3 d-flex flex-row">
          <p className="p-1 font-weight-bold">Ratings</p>
          <Rating className="p-1" name="rating" value={3.5} />
        </div>
        <div class="p-3 d-flex flex-row">
          <p className="p-1 font-weight-bold">Created by</p>
          <a className="p-1">Instructor</a>
        </div>

        <div className="mx-4 my-4">
          <h1>Course Includes</h1>
          <ul class="list-group">
            <li class="list-group-item">9.5 hours on-demand video</li>
            <li class="list-group-item">Certificate of completion</li>
            <li class="list-group-item">10 Modules available</li>
          </ul>
        </div>
      </div>

      <div className="col-sm-3 my-4 p-4">
        <div className="card" style={{ width: "20rem", height: "30rem" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMaVOraJKBvcxFsULfstzyRjdKxKMJMaPUSA&usqp=CAU"
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              Automate the Boring Stuff with Python Programming
            </h5>
            <p className="card-text">
            A practical programming course for office workers, academics, and
          administrators who want to improve their productivity.
            </p>
            <a href="#" className="btn btn-primary my-4">
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
