import React from 'react'
import { Link } from 'react-router-dom'

const Courses = (props) => {
  return (
    <>
      <div style={containerStyle}>
        <h1>All Courses</h1>
        <div style={cardContainerStyle}>
          <div className=' col-sm-3 mb-4'>
            <div className='card shadow-lg'>
              <img
                src='https://prod-discovery.edx-cdn.org/media/course/image/52bf4539-6137-4968-9605-6c32414dcdc4-7e805a266b31.small.png'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Course title {props.sq}</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to='/CourseLanding' className='btn btn-primary'>
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
          <div className=' col-sm-3 mb-4'>
            <div className='card shadow-lg'>
              <img
                src='https://prod-discovery.edx-cdn.org/media/course/image/52bf4539-6137-4968-9605-6c32414dcdc4-7e805a266b31.small.png'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Course title {props.sq}</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to='/CourseLanding' className='btn btn-primary'>
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
          <div className=' col-sm-3 mb-4'>
            <div className='card shadow-lg'>
              <img
                src='https://prod-discovery.edx-cdn.org/media/course/image/52bf4539-6137-4968-9605-6c32414dcdc4-7e805a266b31.small.png'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Course title {props.sq}</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to='/CourseLanding' className='btn btn-primary'>
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f7f7f7',
}

const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
}

const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '20px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '5px',
}

export default Courses
