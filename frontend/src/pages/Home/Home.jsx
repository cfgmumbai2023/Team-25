import React from 'react'
import Header from '../../components/Header'
import Feature from '../../components/Feature'
import CommunityCard from '../../components/community_card'

const Home = () => {
  return (
    <div>
      <Header />
      <Feature />
      <CommunityCard
        video='http://res.cloudinary.com/guitara/video/upload/v1671818422/myptpgoaradlm73fgkuu.mp4'
        title='Video Title'
        button='button title'
      />
    </div>
  )
}

export default Home
