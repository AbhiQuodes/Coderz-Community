import React from 'react'
import './IntroContainer.css'

const IntroContainer = () => {
  return (
    <div className='intro-box' >
     <h2 className='intro-head typing-effect' >Welcome to <br></br>Coderz Community! </h2> 
      <h4 className='intro-msg'>Where Passion Meets Code — Learn, Build, and Thrive Together!
      </h4> 
      <div className='intro-img-box'>
        {/* <img className='intro-img' src ={introImg} alt='intro-img'></img> */}
      </div>
    </div>
    
  )
}

export default IntroContainer