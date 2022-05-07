import React from "react";

const Languages = () => {
  const handleChange = (option) => {
    localStorage.setItem("lang", option.target.value);
    window.location.reload();
  };
  const language = localStorage.getItem("lang") || "en";

  return (
    <nav className="container">
      <div className="row">
        {/* <div className="col-10"></div> */}
        <div className="col-2">
          <select
            className="custom-select"
            onChange={handleChange}
            value={language}
          >
            <option value="en">English</option>
            <option value="am">Armenian</option>
            <option value="ru">Russian</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Languages;
