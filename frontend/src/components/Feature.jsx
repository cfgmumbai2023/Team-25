import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage1 from '../images/images1.jpeg'

function Feature() {
  const images1 = [
  ];
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
            title='Igor stimac'
            details='loremipsum'
          />
          <FeatureBox
            image={featureimage1}
            title='Igor stimac'
            details='loremipsum'
          />
          <FeatureBox
            image={featureimage1}
            title='Igor stimac'
            details='loremipsum'
          />
          <FeatureBox
            image={featureimage1}
            title='Igor stimac'
            details='loremipsum'
          />
          
        </div>
      </div>
    </div>
  )
}

export default Feature
