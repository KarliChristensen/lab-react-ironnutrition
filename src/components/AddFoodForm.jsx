import React from 'react';
import { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');
  console.log(props.addFood);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    props.addFood(newFood);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        name="basic"
        labelcol={{
          span: 8,
        }}
        wrappercol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialvalues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input
          label="Name"
          value={name}
          name="name"
          type="text"
          onChange={handleNameInput}
          rules={[
            {
              required: true,
              message: 'Please input a name!',
            },
          ]}
        />

        <label>Image</label>
        <Input
          label="Image"
          value={image}
          name="image"
          type="text"
          onChange={handleImageInput}
          rules={[
            {
              required: true,
              message: 'Please input an image!',
            },
          ]}
        />

        <label>Calories</label>
        <Input
          label="Calories"
          value={calories}
          name="calories"
          type="number"
          onChange={handleCaloriesInput}
          rules={[
            {
              required: true,
              message: 'Please input the amount of calories!',
            },
          ]}
        />

        <label>Servings</label>
        <Input
          label="Servings"
          value={servings}
          name="servings"
          type="number"
          onChange={handleServingsInput}
          rules={[
            {
              required: true,
              message: 'Please input the amount of calories!',
            },
          ]}
        />

        <button type="default">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
