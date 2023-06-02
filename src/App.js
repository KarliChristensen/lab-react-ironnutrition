import './App.css';
import foods from './foods.json';
/* import MenuItem from './components/MenuItem'; */
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foodArr, setFoodArr] = useState(foods);
  const [query, setQuery] = useState('');

  const addNewFood = (newFood) => {
    const updatedFoodArr = [...foodArr, newFood];
    setFoodArr(updatedFoodArr);
  };

  const deleteFood = (foodDeletion) => {
    const newFoodArr = [...foodArr].filter((foodDeletion) => {
      return foodDeletion.name !== foodArr[0].name;
    });
    setFoodArr(newFoodArr);
  };

  return (
    <div className="App">
      {/*       <div>
        {foodArr.map((foodItem, index) => (
          <MenuItem key={index} foodItem={foodItem} />
        ))}
      </div> */}
      <div>
        <div>
          <SearchBar query={query} setQuery={setQuery} />
        </div>
        <AddFoodForm addFood={addNewFood} />
        {foodArr
          .filter((product) => {
            const productNameMatches =
              query.toLowerCase() === '' ||
              product.name.toLowerCase().includes(query);
            return productNameMatches;
          })
          .map((foodItem, index) => (
            <FoodBox
              deleteFood={deleteFood}
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
