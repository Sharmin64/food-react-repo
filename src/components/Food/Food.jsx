import React from 'react';
import "./Food.css"

const Food = (props) => {
  //console.log(props)
  const {strArea,strMeal,strMealThumb,strTags} = props.food
  return (
    <div className='food-card'>
       <img className='image' src={strMealThumb} alt="" />
      <div className='food-info'>
      <h3>Food Area:{strArea}</h3>
      <p>Meal: {strMeal}</p>
      <p>Recipe:{strTags?strTags:"null"}</p>
     </div>
     
     <button className='btn-food'>Add Food Item</button>
    </div>
  );
};

export default Food;