import React, { useState } from "react";
import Achievements from "./achievements";
import Courses from "./courses";
function Profile() {
  const [page, setpage] = useState(true);
  const [details, setDetails] = useState({
    fullName: "John Doe",
    email: "johndoe100@gmail.com",
    sport: "Football",
    yoe: "4",
    phone: "123456789",
    image: "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000",
      
  });
  const [tempDetails, setTempDetails] = useState({
    fullName: details.fullName,
    email: details.email,
    sport: details.sport,
    yoe: details.yoe,
    image: details.image,
    phone: details.phone,
  });
  const onchange = (e) => {
    setTempDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submit = () => {
    console.log(tempDetails);
    setDetails(tempDetails);
  };
  return (
    <>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content px-3 py-3">
            <div>
              <div class="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input
                  value={tempDetails.fullName}
                  onChange={onchange}
                  name="fullName"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your fullname"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input
                  value={tempDetails.email}
                  onChange={onchange}
                  name="email"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Sports</label>
                <input
                  value={tempDetails.sport}
                  onChange={onchange}
                  name="sport"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Sports"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Year of experience</label>
                <input
                  value={tempDetails.yoe}
                  onChange={onchange}
                  name="yoe"
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your year of experience"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Phone no.</label>
                <input
                  value={tempDetails.phone}
                  onChange={onchange}
                  name="phone"
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your phone"
                />
              </div>
              <button
                onClick={submit}
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container text-start mt-5">
        <div className="row">
          <div className="col-8">
            <div className="my-4 text-start py-4 px-4 shadow-lg">
              <h5>Name: {details.fullName}</h5>
              <h5>Email: {details.email}</h5>
              <h5>Sport: {details.sport}</h5>
              <h5>Years of experience: {details.yoe} years</h5>
            </div>
          </div>
          <div className="col-4 ">
            <div className="row">
              <div className="col-8">
                <img
                  src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                  alt="..."
                  class="rounded float-right img-thumbnail shadow-lg"
                ></img>
              </div>
              <div className="col-4">
                <button type="button" class="btn btn-danger">
                  Logout
                </button>
              </div>
            </div>
          
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Edit details
              </button>
            
          </div>
        </div>
       
          <h5>Your Achievements</h5>
            <Achievements />
        
            <Courses />
         
      </div>
    </>
  );
}

export default Profile;