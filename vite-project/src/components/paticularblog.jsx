import React from "react";
import "../CssFiles/paticularblog.css";
import twitter from "../../public/twitter.svg";
import github from "/github.svg";
import linkedin from "/linkedin.svg";
import { useLocation } from "react-router-dom";
import "../CssFiles/mainpage.css";
import { useHref, useNavigate } from "react-router-dom";

const paticularblog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const data = state;
  const title = data.title;
  const date = data.date[0];
  const time = data.date[1];
  const theme = data.date[2];
  const cont = data.cont;
  const p1 = data.p1;
  const p2 = data.p2;
  const p3 = data.p3;
  const p4 = data.p4;

  const click = () => {
    console.log(state);
    console.log("clicked");
    console.log(title);
  };

  const gotoMain = () => {
    navigate("/");
  };

  const gotoAbout = () => {
    navigate("/about");
  };

  const gotoBlogs = () => {
    navigate("/blogs");
  };
  return (
    <div className="full-page">
      <div className="content-page">
        <div className="navbar">
          <h3 className="text-anubrat" onClick={gotoMain}>
            ANUBRAT BORA
          </h3>
          <div className="nav-but">
            <button
              className="about-button"
              id="nav-but-id"
              onClick={gotoAbout}
            >
              About
            </button>
            <button className="blog-button" id="nav-but-id" onClick={gotoBlogs}>
              Blog
            </button>
            <a
              href="https://anubrat.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="newsletter-button" id="nav-but-id">
                Newsletter
              </button>
            </a>
          </div>
        </div>
        <div className="contents">
          <div className="title-blog">{title}</div>
          <div className="date-blog">
            <p>{date}</p>
            <p>•</p>
            <p>{time}</p>
            <p>•</p>
            <p>{theme}</p>
          </div>
          <div className="content-blog">
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
          </div>
        </div>
        <div className="myfooter">
          <div className="footer-left">©️ Anubrat Bora</div>
          <div class="right">
            <div class="right">
              <a
                href="https://twitter.com/anubrat25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter logo" className="footer-logo" />
              </a>
              <a
                href="https://github.com/anubrat25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub logo" className="footer-logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/anubrat-bora-044ba2187/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn logo"
                  className="footer-logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default paticularblog;
