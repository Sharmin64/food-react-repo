import React, { useEffect, useState } from 'react';

const Food = () => {
  const [food,setFood] = useState([])
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(res => res.json())
    .then(data=>setFood(data))
  }, [])
  useEffect(() => {
    
  },[])
  return (
    <div>
      
    </div>
  );
};

export default Food;