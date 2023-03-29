import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import "./Food.css"

const Food = (props) => {
  //console.log(props)
  const { strArea, strMeal, strMealThumb, strTags } = props.food
const handleAddToFoodList=props.handleAddToFoodList
 
  return (
    <div className='food-card'>
       <img className='image' src={strMealThumb} alt="" />
      <div className='food-info'>
      <h3>Food Area:{strArea}</h3>
      <p>Meal: {strMeal}</p>
      <p>Recipe:{strTags?strTags:"null"}</p>
     </div>
     
      <button onClick={() => handleAddToFoodList(props.food)} className='btn-food'>
        Add Food Item
        <FontAwesomeIcon icon={faShoppingBasket} />
      </button>
    </div>
  );
}

export default Food;