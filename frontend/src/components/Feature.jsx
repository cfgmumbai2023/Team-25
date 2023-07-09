import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage1 from '../images/images1.jpeg'
import featureimage2 from '../images/Syed_Abdul_Rahim.jpeg'
import featureimage3 from '../images/Jarnail_Singh_Dhillon'
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
            image={featureimage2}
            title='Syed Abdul Rahim '
            details='Syed Abdul Rahim, a brilliant coach associated with India National Team in the 50s and 60s and give India many success thus making India Football s golden era. He is the most successful Indian Coach.'
          />
          <FeatureBox
            image={featureimage3}
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
