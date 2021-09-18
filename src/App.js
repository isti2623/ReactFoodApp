import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadMeal></LoadMeal>
    </div>
  );
}

function LoadMeal() {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(data => setFood(data.categories))
  }, [])
  return (
    <div>
      {
        food.map(foods => <MealItem foodName={foods.strCategory} foodDesc={foods.strCategoryDescription} foodImg={foods.strCategoryThumb}></MealItem>)
      }
    </div>
  );
}

function MealItem(props) {
  console.log(props);
  return (
    <div>
      <div>
        <img src={props.foodImg} alt="" />
        <h3>Food Name : {props.foodName}</h3>
        <p>{props.foodDesc}</p>
      </div>
    </div>
  );
}

export default App;
