import React from 'react'
import HeaderBar from '../components/HeaderBar'
import IntroContainer from '../components/IntroContainer'
import './Homepage.css'
import CarouselContainer from '../components/CarouselContainer.js'
import ContentContainer from '../components/ContentContainer.js'
import ProjectCards from '../components/ProjectCards.js'
import SectionBlender from '../components/SectionBlender.js'
import IdeaDisplayContainer from '../components/IdeaDisplayContainer.js'
import FooterBar from '../components/FooterBar.js'
import FootNavBar from '../components/FootNavBar.js'
import ContactContainer from '../components/ContactContainer.js'
const Homapage = () => {
  return (
   
        <div className="wrapper">
          <HeaderBar></HeaderBar>
          <IntroContainer></IntroContainer>
          <FootNavBar></FootNavBar>
          <ContentContainer></ContentContainer>
          {/* <SectionBlender></SectionBlender> */}
          <ProjectCards></ProjectCards>
          <CarouselContainer/>
          {/* <SectionBlender></SectionBlender> */}
          <IdeaDisplayContainer></IdeaDisplayContainer>
          <ContactContainer></ContactContainer>
          <FooterBar></FooterBar>
        </div>
    
  )
}

export default Homapage