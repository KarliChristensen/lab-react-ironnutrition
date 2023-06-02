import React from 'react';
import { Card, Col, Button } from 'antd';
import MultiplyComponent from './Multiply';

function FoodBox({ name, image, calories, servings }) {
  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 400, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {`${calories}`} </p>
        <p>Servings: {`${servings}`}</p>
        <MultiplyComponent servings={servings} calories={calories} />
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
