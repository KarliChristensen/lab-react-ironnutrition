import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import MenuItem from './components/MenuItem';
import FoodBox from './components/FoodBox';
import { useState } from 'react';

function App() {
  const [foodArr, setFoodArr] = useState(foods);

  return (
    <div className="App">
      <div>
        {foodArr.map((foodItem, index) => (
          <MenuItem key={index} foodItem={foodItem} />
        ))}
      </div>
      <div>
        {foodArr.map((foodItem, index) => (
          <FoodBox name={foodItem.name} image={foodItem.image} calories={foodItem.calories} servings={foodItem.servings} />
        ))}
      </div>
    </div>
  );
}

export default App;
