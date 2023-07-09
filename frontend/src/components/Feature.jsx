import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage1 from '../images/Armando Colaco.jpeg'
import featureimage2 from '../images/Syed_Abdul_Rahim.jpeg'
import featureimage3 from '../images/Jarnail_Singh_Dhillon.jpg'
import featureimage4 from '../images/Syed Nayeemuddin.jpeg'
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
            title='Armando Colaco'
            details='Armando Colaço (born 22 June 1953) is an Indian football coach, who last managed East Bengal in the I-League. '
          />
          <FeatureBox
            image={featureimage2}
            title='Syed Abdul Rahim '
            details='Syed Abdul Rahim, a brilliant coach associated with India National Team in the 50s and 60s and give India many success thus making India Football s golden era. He is the most successful Indian Coach.'
          />
          <FeatureBox
            image={featureimage3}
            title='Jarnail Singh '
            details='Jarnail Singh Dhillon was a former Indian football player,[3] who played as a centre-back. He was given the Arjuna Award in 1964 for his achievements as a football player.'
          />
          <FeatureBox
            image={featureimage4}
            title=' Syed Nayeemuddin'
            details='Syed Nayeemuddin (born 1944), known as Nayeem,[5][6] is an Indian football coach and former player.[7] He played for and captained the India national team.['
          />
          
        </div>
      </div>
    </div>
  )
}

export default Feature
