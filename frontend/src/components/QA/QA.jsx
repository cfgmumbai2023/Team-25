import React from 'react'
import "../QA.scss"

const Table = () => {
  return (
    <div class="list-group w-100">
  <a href="#shortExampleAnswer1collapse" data-mdb-toggle="collapse" aria-expanded="false"
    aria-controls="shortExampleAnswer1collapse" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Question 1</h5>
    </div>
    <p class="mb-1">
      Short & concise version of the answer.
    </p>
    <small><u>Learn more</u></small>

    <div class="collapse mt-3" id="shortExampleAnswer1collapse">
      Detailed and comprehensive answer goes here. pariatur cliche reprehenderit, enim eiusmod
      high
      life accusamus terry richardson ad
      squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
      sapiente ea proident.
    </div>
  </a>
  <a href="#shortExampleAnswer2collapse" data-mdb-toggle="collapse" aria-expanded="false"
    aria-controls="shortExampleAnswer1collapse" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Question 2</h5>
    </div>
    <p class="mb-1">
      Short & concise version of the answer.
    </p>
    <small class="text-muted"><u>Learn more</u></small>
   
    <div class="collapse mt-3" id="shortExampleAnswer2collapse">
      Detailed and comprehensive answer goes here. pariatur cliche reprehenderit, enim eiusmod
      high
      life accusamus terry richardson ad
      squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
      sapiente ea proident.
    </div>
  </a>
  <a href="#shortExampleAnswer3collapse" data-mdb-toggle="collapse" aria-expanded="false"
    aria-controls="shortExampleAnswer1collapse" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Question 3</h5>
    </div>
    <p class="mb-1">
      Short & concise version of the answer.
    </p>
    <small class="text-muted"><u>Learn more</u></small>
    
    <div class="collapse mt-3" id="shortExampleAnswer3collapse">
      Detailed and comprehensive answer goes here. pariatur cliche reprehenderit, enim eiusmod
      high
      life accusamus terry richardson ad
      squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
      sapiente ea proident.
    </div>
  </a>
</div>
  )
}

export default Table