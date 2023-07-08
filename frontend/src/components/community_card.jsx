import React from 'react'

function community_card(props) {
  return (
    // <div id='community_card'>
    //   <div className='community_card-image'>
    //     <video src={props.video} autoPlay loop muted />
    //   </div>
    //   <div className='community_card-text'>
    //     <h2>{props.title}</h2>
    //     <p>Description Template</p>
    //     <button>{props.button}</button>
    //   </div>
    // </div>

    <div>
      <div className=" col-sm-3 mb-4">
        <div class="card shadow-lg" >
          <img
            src="https://prod-discovery.edx-cdn.org/media/course/image/52bf4539-6137-4968-9605-6c32414dcdc4-7e805a266b31.small.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Course title {props.sq}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className=" col-sm-3 mb-4">
        <div class="card shadow-lg" >
          <img
            src="https://prod-discovery.edx-cdn.org/media/course/image/52bf4539-6137-4968-9605-6c32414dcdc4-7e805a266b31.small.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Course title {props.sq}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      
    </div>
    
  )
}
// function Courses() {
//   return (
//     <>
//       <h1>Your courses</h1>
//       <div className="mt-4 d-flex flex-wrap ">
//         {[1, 2, 3, 4, 5].map((e) => {
//           return (
//             <>
//               <community_card sq={e} />
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }

export default community_card
