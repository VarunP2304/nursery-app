import React from "react";

const PlantDetails = ({ productName, description, careInstructions, growthHabits, specialConsiderations }) => {
  return (
    <div className="plant-details">
      <h2>{productName}</h2>
      <p>{description}</p>
      <h3>Care Instructions:</h3>
      <p>{careInstructions}</p>
      <h3>Growth Habits:</h3>
      <p>{growthHabits}</p>
      <h3>Special Considerations:</h3>
      <p>{specialConsiderations}</p>
    </div>
  );
};

export default PlantDetails;
