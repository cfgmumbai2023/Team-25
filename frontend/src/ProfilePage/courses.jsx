import React, { useState } from "react";

function CardComponent(props) {
  return (
    <>
      <div className=" col-sm-3 mb-4">
        <div class="card shadow-lg">
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
              Continue course
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function CompleteCardComponent(props) {
  return (
    <>
      <div className=" col-sm-3 mb-4">
        <div class="card shadow-lg">
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
            <a href="#" class="btn btn-success">
              Course completed
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
function Courses() {
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="container d-flex mt-5 mb-5">
        <button
          onClick={() => {
            setComplete(false);
          }}
          type="button"
          class={`btn mr-2 ${complete?'btn-light':'btn-primary'}`}
        >
          Continue courses
        </button>
        <button
          onClick={() => {
            setComplete(true);
          }}
          type="button"
          class={`btn ${!complete?'btn-light':'btn-primary'}`}
        >
          Completed Courses
        </button>
      </div>

      {!complete ? (
        <>
          <div className="mt-4 d-flex flex-wrap ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => {
              return (
                <>
                  <CardComponent sq={e} />
                </>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="mt-4 d-flex flex-wrap ">
            {[1, 2, 3, 4, 5,].map((e) => {
              return (
                <>
                  <CompleteCardComponent sq={e} />
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Courses;
