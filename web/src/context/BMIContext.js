import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BMIContext = createContext();

export const BMIProvider = ({ children }) => {
  const [bmi, setBmi] = useState(null);
  const [height, setHeight] = useState(null);
  useEffect(() => {
    const fetchBMIs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-all-health_stats');
        const data = response.data;


        console.log(data);

        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        const latestRecord = sortedData[0];

        if (latestRecord?.height && latestRecord?.weight) {
          const { height, weight } = latestRecord;
          const calculatedBmi = weight / ((height / 100) ** 2);
          setBmi(calculatedBmi);
          setHeight(height)
        } else {
          console.warn('Height or weight is missing in the latest record');
        }
      } catch (error) {
        console.error('Error fetching bmi:', error);
      }
    };

    fetchBMIs();
  }, []);

  return (
    <BMIContext.Provider value={{ bmi, height }}>
      {children}
    </BMIContext.Provider>
  );
};
