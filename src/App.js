import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import MenuItem from './components/MenuItem';

function App() {

  const foodItem = foods

  console.log(foods)

  return (
    <div className="App">
      <div>
      {foods.map((foodItem, index) => (
        <MenuItem key={index} foodItem={foodItem} />
      ))}
      </div>
    </div>
  );
}

export default App;
