import React from "react";
import "../CssFiles/shortblog.css";
import { useHref, useNavigate } from "react-router-dom";

const shortblog = ({ data }) => {
  const navigate = useNavigate();
  const title = data.title;
  const mainDate = data.mainDate;
  const navigatetopat = () => {
    navigate(`/blogs/${title}` , { state:data });
    console.log(data);
  };
  return (
    <div className="shortblog" onClick={navigatetopat}>
      <div className="Blog-title">
        <button>{title}</button>
      </div>
      <div className="Blog-date">{mainDate}</div>
    </div>
  );
};

export default shortblog;
