import React from 'react'
import Header from '../../components/Header'
import Feature from '../../components/Feature'
import CommunityCard from '../../components/community_card'
import Carousal from '../../components/Carousal'
import Aboutus from '../../components/Aboutus'

const Home = () => {
  return (
    <div>
      <Carousal></Carousal>
      <Header />
      <Aboutus></Aboutus>
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
