import React, { useContext, useEffect, useState } from "react";
import "./compoinentsCss/dailyMealCompoinent.css";
import { SiKhanacademy } from "react-icons/si";
import { DailyMealContext } from "../../context/DailyMealContext";

const DailyMealCompoinent = ({ style, children }) => {
  const { data } = useContext(DailyMealContext); // Get BMI data from context
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading with a timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="grid-item" style={style}>
        {children}
        <div className="content-header">Loading...</div>
      </div>
    );
  }

  return (
    <div className="grid-item" style={style}>
      {children}
      <div className="content" style={{ marginLeft: '-34.5%', width: '98%', height: '100%' }}>
        <table className="meal-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên</th>
              <th>Lượng Calories</th>
              <th>Proteins (g)</th>
              <th>Chất béo (g)</th>
              <th>Tinh Bột (g)</th>
              <th>Thời gian ăn</th>
            </tr>
          </thead>
          <tbody>
            {data.map((meal, index) => (
              <tr key={meal._id}>
                <td>{index + 1}</td>
                <td>{meal.name}</td>
                <td>{meal.calories}</td>
                <td>{meal.proteins}</td>
                <td>{meal.fats}</td>
                <td>{meal.carbohydrates}</td>
                <td>{meal.meal_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyMealCompoinent;
