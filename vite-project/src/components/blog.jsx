import React from "react";
import "../CssFiles/blog.css";
import { useNavigate } from "react-router-dom";

const blog = ({data}) => {
  const navigate = useNavigate();
    const title = data.title;
    const mainDate = data.mainDate;
    const cont = data.cont;

    const gotopage = () => {
      navigate(`/blogs/${title}` ,{ state:data });
    };

  return (
    <div className="blog">
      <div className="Blog-title" onClick={gotopage}>{title}</div>
      <div className="Blog-date">{mainDate}</div>
      <div className="Blog-cont">{cont}</div>
    </div>
  );
};

export default blog;
