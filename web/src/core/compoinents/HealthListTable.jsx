import React, { useContext, useEffect, useState } from "react";
import "./compoinentsCss/dailyMealCompoinent.css";
import { SiKhanacademy } from "react-icons/si";
import { HealthListContext } from "../../context/HealthListContext";

const HealthListTable = ({ style, children }) => {
  const { data } = useContext(HealthListContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
              <th>Ngày</th>
              <th>Cân Nặng</th>
              <th>Chiều cao</th>
              <th>Lượng Calories đã đốt cháy (g)</th>
              <th>steps</th>
              <th>activity_level</th>
            </tr>
          </thead>
          <tbody>
            {data.map((health, index) => (
              <tr key={health._id}>
                <td>{index + 1}</td>
                <td>{health.date}</td>
                <td>{health.weight}</td>
                <td>{health.height}</td>
                <td>{health.calories_burned}</td>
                <td>{health.steps}</td>
                <td>{health.activity_level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HealthListTable;
