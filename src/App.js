import './App.css';
import foods from './foods.json';
/* import MenuItem from './components/MenuItem'; */
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodArr, setFoodArr] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFoodArr = [...foodArr, newFood];
    setFoodArr(updatedFoodArr);
  };

  return (
    <div className="App">
      {/*       <div>
        {foodArr.map((foodItem, index) => (
          <MenuItem key={index} foodItem={foodItem} />
        ))}
      </div> */}
      <div>
        <AddFoodForm addFood={addNewFood}/>
        {foodArr.map((foodItem, index) => (
          <FoodBox
            key={index}
            name={foodItem.name}
            image={foodItem.image}
            calories={foodItem.calories}
            servings={foodItem.servings}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
