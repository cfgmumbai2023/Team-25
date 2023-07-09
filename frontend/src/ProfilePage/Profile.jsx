import React, { useEffect, useState } from 'react'
import Achievements from './achievements'
import Courses from './courses'
import axios from 'axios'

function Profile() {
  const [page, setpage] = useState(true)
  const [details, setDetails] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe100@gmail.com',
    type: 'Coach',
    sport: 'Football',
    yearOfExperience: '4',
    phone: '123456789',
    image:
      'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000',
  })
  const [tempDetails, setTempDetails] = useState({
    firstName: details.firstName,
    lastName: details.lastName,
    email: details.email,
    type: details.type,
    sport: details.sport,
    yearOfExperience: details.yearOfExperience,
    image: details.image,
    phone: details.phone,
  })

  const [user, setUser] = useState({})

  const [selectedType, setSelectedType] = useState('')
  const onchange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

  useEffect(() => {
    const getUsers = async () => {
      try {
        const localStorageUser = JSON.parse(localStorage.getItem('guitaraUser'))
        console.log('localStorageUser', localStorageUser)
        const id = localStorageUser.userId
        var res = await axios.get(`http://localhost:5000/api/${id}`)
        console.log('res = : ', res)
        setUser(res)
      } catch (error) {
        console.log('fetching details array : ', error)
      }
    }
    getUsers()
  }, [])

  const submit = () => {
    console.log(tempDetails)
    setDetails(tempDetails)
  }
  console.log(user)

  return (
    <>
      {user && user.data && (
        <>
          <div style={{ height: '40px' }}></div>
          <div
            class='modal fade'
            id='exampleModalCenter'
            tabindex='-1'
            role='dialog'
            aria-labelledby='exampleModalCenterTitle'
            aria-hidden='true'
          >
            <div class='modal-dialog modal-dialog-centered' role='document'>
              <div class='modal-content px-3 py-3'>
                <div>
                  <div class='form-group'>
                    <label for='exampleInputEmail1'>First Name</label>
                    <input
                      value={user.data.firstName}
                      onChange={onchange}
                      name='firstName'
                      type='text'
                      class='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Enter your firstname'
                    />
                  </div>
                  <div class='form-group'>
                    <label for='exampleInputEmail2'>Last Name</label>
                    <input
                      value={user.data.lastName}
                      onChange={onchange}
                      name='lastName'
                      type='text'
                      class='form-control'
                      id='exampleInputEmail2'
                      aria-describedby='emailHelp'
                      placeholder='Enter your lastname'
                    />
                  </div>
                  <div class='form-group'>
                    <label for='exampleInputPassword1'>Email</label>
                    <input
                      value={user.data.email}
                      onChange={onchange}
                      name='email'
                      type='text'
                      class='form-control'
                      id='exampleInputPassword1'
                      placeholder='email'
                    />
                  </div>

                  <div class='form-group'>
                    <label for='type'>Designation</label>
                    <select
                      id='type'
                      name='type'
                      value={user.data.type}
                      onChange={onchange}
                      class='form-control'
                    >
                      <option value=''>Select</option>
                      <option value='Coach'>Coach</option>
                      <option value='Instructor'>Instructor</option>
                    </select>
                  </div>

                  {/* {selectedType === "Instructor" && (
        // <button>
        //   Upload Courses
        // </button>
      // )} */}

                  {/* {selectedType !== "Instructor" && (
        <>
          {/* <h5>Your Achievements</h5>
          <Achievements /> */}

                  <div class='form-group'>
                    <label for='exampleInputPassword1'>Sports</label>
                    <input
                      value={user.data.sports}
                      onChange={onchange}
                      name='sport'
                      type='text'
                      class='form-control'
                      id='exampleInputPassword1'
                      placeholder='Sports'
                    />
                  </div>
                  <div class='form-group'>
                    <label for='exampleInputPassword1'>
                      Year of experience
                    </label>
                    <input
                      value={user.data.yearOfExperience}
                      onChange={onchange}
                      name='yearOfExperience'
                      type='number'
                      class='form-control'
                      id='exampleInputPassword1'
                      placeholder='Enter your year of experience'
                    />
                  </div>
                  <div class='form-group'>
                    <label for='exampleInputPassword1'>Phone no.</label>
                    <input
                      value={user.data.mobile}
                      onChange={onchange}
                      name='phone'
                      type='number'
                      class='form-control'
                      id='exampleInputPassword1'
                      placeholder='Enter your phone'
                    />
                  </div>
                  <button
                    onClick={submit}
                    type='button'
                    class='btn btn-secondary'
                    data-dismiss='modal'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class='container text-start mt-5'>
            <div className='row'>
              <div className='col-8'>
                <div className='my-4 text-start py-4 px-4 shadow-lg'>
                  <h5>
                    Name: {user.data.firstName} {user.data.lastName}
                  </h5>
                  <h5>Email: {user.data.email}</h5>
                  <h5>Sport: {user.data.sports[0]}</h5>
                  <h5>Designation: {user.data.type}</h5>
                  <h5>
                    Years of experience: {user.data.yearOfExperience} years
                  </h5>
                </div>
              </div>
              <div className='col-4 '>
                <div className='row'>
                  <div className='col-8'>
                    <img
                      src='https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000'
                      alt='...'
                      class='rounded float-right img-thumbnail shadow-lg'
                    ></img>
                  </div>
                </div>

                <button
                  type='button'
                  class='btn btn-primary mt-3'
                  data-toggle='modal'
                  data-target='#exampleModalCenter'
                >
                  Edit details
                </button>
              </div>
            </div>

            {user.data.type === 'coach' ? (
              <>
                <h5>Your Achievements</h5>
                <Achievements />
              </>
            ) : (
              <>
                <div className='container'>
                  <button className='btn btn-primary'>Upload Course</button>
                </div>
              </>
            )}

            <Courses />
          </div>
        </>
      )}
    </>
  )
}

export default Profile
