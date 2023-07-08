import React, { useState, useEffect } from "react";
import "./uploadCourse.css";
import { useNavigate } from "react-router-dom";
// const cloudinary = require('cloudinary').v2;


const APP_URL = process.env.REACT_APP_API_URL;

export default function UploadCourse() {
  //get the user from local storage
  const user = localStorage.getItem("guitaraUser");
  const obj = JSON.parse(user)

  const [body, setBody] = useState("");
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")
  const navigate = useNavigate()

  //  post request to the database and then navigate to community page 
const createPost=async()=>{
    if (url) {
      const guitaraUser= await localStorage.getItem("guitaraUser");
      const User=await JSON.parse(guitaraUser);
      console.log(User.token)
      fetch(APP_URL+"community/createPost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization":  User.access_token,
        },
        body: JSON.stringify({
          body,
          pic: url
        })
      }).then(res => res.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            alert("success!")
            navigate("/")
          }
        })
        .catch(err => console.log(err))
    }
}

//  if there is any changes in the usestate variable of url, then it calls createPost function
  useEffect(() => {
     createPost()// saving post to mongodb
  }, [url])

//  function called after clicking on share button
  const postDetails = async () => {

    console.log(body, image)
    const data = new FormData()
    data.append("upload_preset", "bb9m96pg")
    data.append("file", image)
    data.append("cloud_name", "cfg")
    data.append("api_key","533141562158588")

    // fetch from cloudinary a link for the image 
    fetch("https://api.cloudinary.com/v1_1/cfg/video/upload", {
      method: "post",
      body: data,
    }).then(async (res) => {
      const response = await res.json();
      // the url use state is set here , after this a use effect is called
      setUrl(response.url);
    })
      .catch(err => console.log(err))
  }

  useEffect(() =>{
    console.log(image)
  },[image])

  // it is the on change function called whenever there is any image in the input 
  const loadfile = (event) => {
    var output = document.getElementById("output");
    console.log(output)
    console.log(event)
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  return (
    <div className="background-post">
        <div className="createPost">
        {/* //header */}
        <div className="post-header">
            <h4 style={{ margin: "3px auto" }}>Create New Post</h4>
            <button id="post-btn" onClick={() => { postDetails() }}>Post</button>
        </div>
        {/* image preview */}
        <div className="main-div">
            <img
            id="output"
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
            />
            <input
            type="file"
            name="file"
            accept="video/*"
            onChange={(event) => {
                loadfile(event);
                setImage(event.target.files[0])
            }}
            />
        </div>
        {/* details */}
        <div className="details">
            <div className="card-header">
            {/* <div className="card-pic">
                <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                />
            </div> */}
            <h5>hi</h5>
            </div>
            <textarea value={body} onChange={(e) => {
            setBody(e.target.value)
            }} type="text" placeholder="Write a caption...."></textarea>
        </div>
        </div>
    </div>
    
  );
}
