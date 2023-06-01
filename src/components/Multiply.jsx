import React from 'react';

function MultiplyComponent({ servings, calories }) {
  const result = servings * calories;

  return (
    <div>
      <p>
        <b>Total Calories: </b> kcal: {result}
      </p>
    </div>
  );
}

export default MultiplyComponent;
