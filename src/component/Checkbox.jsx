import React, { useState, useCallback } from "react";

const _dishes = [
  { id: 1, dishName: "Spaghetti Bolognese", isChecked: false },
  { id: 2, dishName: "Chicken Alfredo", isChecked: false },
  { id: 3, dishName: "Vegetarian Pizza", isChecked: false },
  { id: 4, dishName: "Grilled Salmon", isChecked: false },
  { id: 5, dishName: "Margherita Pasta", isChecked: false },
  { id: 6, dishName: "Caesar Salad", isChecked: false },
];

const Checkbox = () => {
  const [filterData, setFilterData] = useState("");
  const [dishes, setDishes] = useState(_dishes);

  const handleCheckboxChange = useCallback(
    (dishId) => {
      const updatedDishes = dishes.map((dish) =>
        dish.id === dishId ? { ...dish, isChecked: !dish.isChecked } : dish
      );
      setDishes(updatedDishes);

      const checkedDishes = updatedDishes
        .filter((dish) => dish.isChecked)
        .map((dish) => dish.dishName);

      setFilterData(checkedDishes.join(", "));
    },
    [dishes]
  );

  return (
    <>
      {dishes.map(({ id, isChecked, dishName }) => (
        <div className="form-check" key={id}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={isChecked}
            id={`dish-${id}`}
            onChange={() => handleCheckboxChange(id)}
          />
          <label className="form-check-label" htmlFor={`dish-${id}`}>
            {dishName}
          </label>
        </div>
      ))}
      <br />
      {filterData && (
        <strong key="filterData">I love to eat {filterData}</strong>
      )}
    </>
  );
};

export default Checkbox;
