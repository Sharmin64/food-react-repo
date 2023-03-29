import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import "./Meals.css"

const Meals = () => {
  const [meals, setMeals] = useState([])
// console.log( typeof meals);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(res => res.json())
      .then(data=>setMeals(data))
  }, [])
 
  return (
    <div className='food-container'>
      <div className="food-card">
        <h2>food coming here:</h2>
        {
          meals.meals.map(food => <Food
            key={food.idMeal}
            food={food}
          ></Food>)
        }
      </div>
      <div className="order-card">
        <h3>Order Summary</h3>
       
      </div>
      
    </div>
  );
};

export default Meals;