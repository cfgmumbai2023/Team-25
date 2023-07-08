import React from "react";
function Certificate() {
  return (
    <>
      <div className="container my-5 px-2">
        <h1 className="text-center">
            Congratulations! You have successfully completed your module.</h1>
        <h3 className="text-center">
        Download your certificate here
        <br />
        <br />
          <span className="text-primary">
          <a className='download-bttn' 
          href="https://smallpdf.com/file#s=aa9e0ba1-d449-4081-b3db-70fd7e3d103f"  
          target="_blank"
          rel="noopener noreferrer"
          >
            Download
            </a>
          </span>
        </h3>

      </div>

      <div className="container">
        <h3>Looking for employment opportunities? Start here</h3>
        <div className="d-flex flex-wrap mt-5 justify-between">
            
              <>
                <div class="card col-lg-3 grid-sm-3">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/005/073/933/non_2x/vintage-logo-symbol-illustration-design-farm-logo-template-suitable-for-business-and-product-names-this-stylish-logo-design-can-be-used-for-various-purposes-for-your-company-free-vector.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Organisation 1</h5>
                    <p class="card-text">
                    A dynamic football organization dedicated to promoting teamwork and inclusivity on and off the field.
                    </p>
                    <a href="#" class="download-bttn">
                      Apply now
                    </a>
                  </div>
                </div>
              </>
            
        </div>
      </div>
    </>
  );
}

export default Certificate;
