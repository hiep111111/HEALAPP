import React, { useContext, useState, useEffect } from "react";
import "./compoinentsCss/HeightCompoinent.css";
import { FaChartBar } from 'react-icons/fa';
import { Riple } from "react-loading-indicators";
import { SiKhanacademy } from "react-icons/si";
import { BMIContext } from "../../context/BMIContext";

const HeightCompoinent = ({ style, children }) => {
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
            Chiều cao hiện tại
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
          {height}
        </h1>
        <div className="bottom-line"></div>
        <div className="content-bottom">
          Chiều cao hiện tại
        </div>
      </div>
    </div>
  );
};

export default HeightCompoinent;
