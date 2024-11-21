import React, { useContext, useState, useEffect } from "react";

const Notfound = ({ style, children }) => {
  const [isLoading, setIsLoading] = useState(true);


  return (
    <div style={style}>
      Not found
    </div>
  );
};

export default Notfound;
