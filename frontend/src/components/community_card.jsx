import React from 'react'

function community_card(props) {
  return (
    <div id='community_card'>
      <div className='community_card-image'>
        <video src={props.video} autoPlay loop muted />
      </div>
      <div className='community_card-text'>
        <h2>{props.title}</h2>
        <p>Description Template</p>
        <button>{props.button}</button>
      </div>
    </div>
  )
}

export default community_card
