import React, { useState, useEffect } from "react";
import "./App.css";


const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="Loading">
      {loading ? (
        <div>loading</div>
      ) : (
        <header className="Loading-header"></header>
      )}
    </div>
  );
};

export default Loading;
