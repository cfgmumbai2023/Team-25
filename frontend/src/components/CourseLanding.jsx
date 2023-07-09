import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Rating from '@mui/material/Rating'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const LandingPage = (props) => {
  // const { id } = props
  const [course, setCourse] = useState([])

  useEffect(() => {
    const getCourse = async () => {
      try {
        const id = '64a9c41e485a842d53abe075'
        var res = await axios.get(`http://localhost:5000/courses/${id}`)
        console.log('res ', res)
        console.log('res data', res.data)
        setCourse(res)
      } catch (error) {
        console.log(error)
      }
    }
    getCourse()
  }, [])
  return (
    <>
      {course && course.data && (
        <div className='row m-4 p-4'>
          <div className='col-sm-9 my-4 p-4 bg-light'>
            <h1 className='m-4'>
              {/* Automate the Boring Stuff with Python Programming */}
              {course.data.courseTitle}
            </h1>
            <p className='text-muted m-4'>{course.data.description}</p>

            <div class='p-3 d-flex flex-row'>
              <p className='p-1 font-weight-bold'>Ratings</p>
              <Rating
                className='p-1'
                name='rating'
                value={course.data.rating}
              />
            </div>
            <div class='p-3 d-flex flex-row'>
              <p className='p-1 font-weight-bold'>Course Category</p>
              <a className='p-1'>{course.data.category}</a>
            </div>
            <div class='p-3 d-flex flex-row'>
              <p className='p-1 font-weight-bold'>Created by</p>
              <a className='p-1'>Instructor</a>
            </div>

            <div className='mx-4 my-4'>
              <h1>Course Includes</h1>
              <ul class='list-group'>
                <li class='list-group-item'>
                  {course.data.duration} hours on-demand video
                </li>
                <li class='list-group-item'>Certificate of completion</li>
                <li class='list-group-item'>
                  {course.data.numberOfModule} Modules available
                </li>
              </ul>
            </div>
          </div>

          <div className='col-sm-3 my-4 p-4'>
            <div className='card' style={{ width: '20rem', height: '30rem' }}>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMaVOraJKBvcxFsULfstzyRjdKxKMJMaPUSA&usqp=CAU'
                class='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>{course.data.courseTitle}</h5>
                <p className='card-text'>{course.data.description}</p>
                <a href='#' className='btn btn-primary my-4'>
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LandingPage
