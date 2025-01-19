import React from 'react'
import './IdeaDisplayContainer.css'
import SectionTitle from './SectionTitle';
import basicLogo  from './../images/basicLogo.png';



const IdeaDisplayContainer = () => {

  const projectIdeas = [
    { name: "AnimeFlix or AnimePlayer", projectIdeaName: "Anime movies or series portal", projectImage: "anime_image_1" },
    { name: "Car-Central", projectIdeaName: "Car dealing", projectImage: "car_image_1" },
    { name: "E-Shopping", projectIdeaName: "Online shopping", projectImage: "shopping_image_1" },
    { name: "E-Learning", projectIdeaName: "E-Learning platform", projectImage: "learning_image_1" },
    { name: "Electro-Mart", projectIdeaName: "Electronic items shopping", projectImage: "electronics_image_1" },
    { name: "E-ClothingBrand", projectIdeaName: "Cloth shopping", projectImage: "clothing_image_1" },
    { name: "E-Foody Site", projectIdeaName: "Online Fast Food Restaurant", projectImage: "food_image_1" },
    { name: "FoodMart", projectIdeaName: "Grocery Store", projectImage: "grocery_image_1" },
    { name: "E-Furniture", projectIdeaName: "Home furniture dealer", projectImage: "furniture_image_1" },
    { name: "Life Insurance", projectIdeaName: "LifeSure", projectImage: "insurance_image_1" },
    { name: "Organic FoodMart", projectIdeaName: "Organic Grocery Store", projectImage: "organic_image_1" },
    { name: "Café Restaurant", projectIdeaName: "Café and Restaurant", projectImage: "cafe_image_1" },
    { name: "E-Fashion Site", projectIdeaName: "Fashion Shopping", projectImage: "fashion_image_1" },
    { name: "Luxury Hotel", projectIdeaName: "Luxury Hotel Booking", projectImage: "hotel_image_1" },
    { name: "Gym or Fitness Application", projectIdeaName: "Fitness and Gym App", projectImage: "fitness_image_1" },
    { name: "Spa or Terapia Centre", projectIdeaName: "Spa Services", projectImage: "spa_image_1" },
    { name: "Construction Services", projectIdeaName: "Construction Company", projectImage: "construction_image_1" },
    { name: "E-Post/Delivery Services", projectIdeaName: "Postal and Delivery Services", projectImage: "delivery_image_1" },
    { name: "Aranoz", projectIdeaName: "Miscellaneous Service Portal", projectImage: "aranoz_image_1" },
    { name: "Branded Shoe Shopping", projectIdeaName: "Shoe Shopping Platform", projectImage: "shoe_image_1" },
    { name: "E-FruitBasket", projectIdeaName: "Fruit Delivery", projectImage: "fruit_image_1" },
    { name: "Pet Care", projectIdeaName: "Pet Services and Care", projectImage: "petcare_image_1" },
  ];
  
  return (
    <div className="idea-section">
      <SectionTitle content="Project Ideas"></SectionTitle>
      <div className='project-idea-container'>
        <div className='project-idea-box'>
          {
            projectIdeas.map((eachProject)=>{
              return(
                <div className="each-idea-project-box" >
                  <img className="project-idea-img" src={basicLogo} alt='project-img'></img>
                  <div className='project-idea-title'>{eachProject.name}</div>
                  </div>
              )
            })
          }
        </div>
      </div>

        
    </div>
  )
}

export default IdeaDisplayContainer