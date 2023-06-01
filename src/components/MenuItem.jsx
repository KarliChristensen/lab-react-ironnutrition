import React from 'react';

function MenuItem({ foodItem }) {
  console.log(foodItem);
  return (
    <div>
      <h1>{foodItem.name}</h1>
      <img src={foodItem.image} width={200} alt="" />
    </div>
  );
}

export default MenuItem;
