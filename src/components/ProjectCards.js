import React from 'react'
import './ProjectCards.css'
import SectionTitle from './SectionTitle'
import basicLogo  from './../images/basicLogo.png';
import flipIcon  from './../images/flipIcon.png';



const ProjectCards = () => {

  let projectDetails=[
    {
      "name": "My Architect",
      "url": "https://example.com/my-architect",
      "introduction": "A beautifully designed portfolio showcasing the work of an architect. It highlights stunning designs, architectural marvels, and project journeys."
    },
    {
      "name": "Code Snippet",
      "url": "https://example.com/code-snippet",
      "introduction": "An intuitive platform for developers to save, manage, and share code snippets. It supports multiple programming languages and promotes collaboration."
    },
    {
      "name": "ChatBook (ChatApp)",
      "url": "https://example.com/chatbook",
      "introduction": "A fun and interactive social platform where users can connect, chat, and share updates with friends in a visually appealing interface."
    },
    {
      "name": "Evergreen-Cart",
      "url": "https://evergreen-cart.vercel.app",
      "introduction": "An e-commerce website for a seamless shopping experience. Features product listings, a shopping cart, and a smooth checkout process."
    },
    {
      "name": "Aryan Enterprises",
      "url": "https://example.com/aryan-enterprises",
      "introduction": "A business portfolio website created for Aryan Enterprises, showcasing their role as agents for importing and exporting products."
    },
    {
      "name": "Cook-It",
      "url": "https://example.com/cook-it",
      "introduction": "A food recipe website where users can search for meals, view detailed recipes, and explore culinary delights with ease."
    },
    {
      "name": "Digital Code Converter",
      "url": "https://example.com/digital-code-converter",
      "introduction": "A user-friendly tool for converting between various digital codes like binary, octal, hexadecimal, and more."
    },
    {
      "name": "A Learner's Kit",
      "url": "https://example.com/a-learners-kit",
      "introduction": "A model website aimed at revolutionizing academic learning by providing interactive tools and resources for students."
    },
    {
      "name": "Sentinel Analysis",
      "url": "https://example.com/sentinel-analysis",
      "introduction": "A scientific web application designed for performing complex calculations and data analysis with ease."
    },
    {
      "name": "Foodie Snake",
      "url": "https://example.com/foodie-snake",
      "introduction": "A fun and visually attractive snake game with a food-based twist, perfect for quick entertainment and relaxation."
    },
    {
      "name": "Todo List",
      "url": "https://example.com/todo-list",
      "introduction": "A simple and effective app for managing tasks with add and delete functionality, helping users stay organized."
    }
  ]
  return (
    <div className="project-section">
      <SectionTitle content="Our projects"></SectionTitle>
      <div className='project-container'>
        <div className='project-box'>
          {
            projectDetails.map((eachProject)=>{
              return(
                <div className="each-project-box" >
                  <img className="project-img" src={basicLogo} alt='project-img'></img>
                  <a  style={{textDecoration:"none"}} rel ="noopener" href='https://evergreen-cart.vercel.app' target="_blank" className='project-title'>{eachProject.name}</a>
                  <div className='project-intro'>{eachProject.introduction}</div>
                  <button className='flip-btn'><img src={flipIcon} className='flip-icon' alt="flip-img"></img></button>
                  </div>
              )
            })
          }
        </div>
      </div>

        
    </div>
  )
}

export default ProjectCards