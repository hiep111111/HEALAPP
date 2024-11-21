import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DailyMealContext = createContext();

export const DailyMealProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBMIs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-all-meals');
        const data = response.data;
        console.log(data);
        setData(data);
      } catch (error) {
        console.error('Error fetching bmi:', error);
      }
    };

    fetchBMIs();
  }, []);

  return (
    <DailyMealContext.Provider value={{ data }}>
      {children}
    </DailyMealContext.Provider>
  );
};
