import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import "./Meals.css"

const Meals = () => {
  const [meals, setMeals] = useState([])
  const [foodItem, setFoodItem] =useState([])
// console.log(meals);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(res => res.json())
      //.then(data=>setMeals(data))
      .then(data=>setMeals(data.meals))
  }, [])
  const handleAddToFoodList = (food) => {
    const newFoodItem = [...foodItem, food]
    setFoodItem(newFoodItem)
  }
return (
  <div className='food-container'>
    
    <div className="meals-card">
    
      {
        meals.map(food =>
          <Food
          key={food.idMeal}
            food={food}
            handleAddToFoodList={handleAddToFoodList}
        ></Food>)
      }
     
    </div>
    <div className="order-card">
      <h3>Food Items List</h3>
     <p>added item: {foodItem.length}</p>
    </div>
    
  </div>
);
};


export default Meals;