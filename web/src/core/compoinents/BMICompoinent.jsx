import React, { useContext, useState, useEffect } from "react";
import "./compoinentsCss/BMICompoinent.css";
import { FaChartBar } from 'react-icons/fa';
import { Riple } from "react-loading-indicators";
import { SiKhanacademy } from "react-icons/si";
import { BMIContext } from "../../context/BMIContext";

const BMICompoinent = ({ style, children }) => {
  const { bmi } = useContext(BMIContext); // Lấy dữ liệu BMI từ context
  const { height } = useContext(BMIContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Giả lập loading bằng timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="grid-item" style={style}>
        {children}
        <SiKhanacademy className="icon" />
        <div className="content">
          <h1 className="content-header">
            <Riple color="#8eb990" size="medium" text="" textColor="" />
          </h1>
          <div className="bottom-line"></div>
          <div className="content-bottom">
            BMI Current
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid-item" style={style}>
      {children}
      <SiKhanacademy className="icon" />
      <div className="content">
        <h1 className="content-header">
          {bmi.toFixed(2)}
        </h1>
        <div className="bottom-line"></div>
        <div className="content-bottom">
          BMI Current
        </div>
      </div>
    </div>
  );
};

export default BMICompoinent;
