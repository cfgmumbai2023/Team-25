import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage1 from '../images/home_com.jpg'

function Feature() {
  return (
    <div className='f-main'>
      <div>
        <h1 className='feature-head'>
          A place for you to <span>learn, practice </span>and{' '}
          <span>show off</span>..
        </h1>
      </div>
      <div id='features'>
        <div className='a-container'>
          <FeatureBox
            image={featureimage1}
            title='Title One'
            details='loremipsum'
          />
          <FeatureBox
            image={featureimage1}
            title='Title Two'
            details='loremipsum'
          />
          <FeatureBox
            image={featureimage1}
            title='Title Three'
            details='loremipsum'
          />
        </div>
      </div>
    </div>
  )
}

export default Feature
