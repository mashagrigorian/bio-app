import React, { useState, useEffect } from "react";
import "./App.css";
import ClipLoader from "react-spinners/ClipLoader";

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
        <ClipLoader size={30} color={"#F33A24"} loading={loading} />
      ) : (
        <header className="Loading-header"></header>
      )}
    </div>
  );
};

export default Loading;
