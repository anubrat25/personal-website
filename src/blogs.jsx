import React from "react";
import "../src/CssFiles/mainpage.css";
import "./CssFiles/blogs.css";
import { useHref, useNavigate } from "react-router-dom";
import twitter from "../public/twitter.svg";
import github from "../public/github.svg";
import linkedin from "../public/linkedin.svg";
import Shortblog from "./components/shortblog";
import { Blogarray } from "./Blog/blogShort.jsx";

export default function blogs() {
  const navigate = useNavigate();
  const gotoMain = () => {
    navigate("/");
  };
  const gotoAbout = () => {
    navigate("/about");
  };

  return (
    <div className="about">
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
              <button className="blog-button" id="nav-but-id">
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
          <div className="blog-list-container">
            <h1>Blog</h1>
            <p>
              This is where I write. Subscribe to my{" "}
              <span>
                <a
                  href="https://anubrat.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  newsletter
                </a>
              </span>{" "}
              to get future posts straight to your inbox.
            </p>
            <div className="blog-list">
              {Blogarray.map((patBlog, i) => (
                <Shortblog key={i} data={patBlog} />
              ))}
            </div>
          </div>
          <div className="myfooter">
            <div className="footer-left">©️ Anubrat Bora</div>
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
}
