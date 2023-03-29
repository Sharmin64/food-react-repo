import React from 'react';

const Food = (props) => {
  console.log(props.food)
  const {strArea,strMeal,strMealThumb,strTags} = props.food
  return (
    <div className='food-card'>
      <h2>Food is here </h2>
      <h3>Food Area:{strArea}</h3>
      <p>meal: {strMeal}</p>
      <img src={strMealThumb} alt="" />
      <p>recipef:f{strTags?strTags:"null"}</p>
    </div>
  );
};

export default Food;