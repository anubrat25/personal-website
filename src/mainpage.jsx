import React from "react";
import { useHref, useNavigate } from "react-router-dom";
import "../src/CssFiles/mainpage.css";
import twitter from "../public/twitter.svg";
import github from "../public/github.svg";
import linkedin from "../public/linkedin.svg";
import Blog from "./components/blog.jsx";
import { Blog1 } from "./Blog/blogShort.jsx";
import { Blog2 } from "./Blog/blogShort.jsx";
import { Blog3 } from "./Blog/blogShort.jsx";

const mainpage = () => {
  const navigate = useNavigate();
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
          <h3 className="text-anubrat">ANUBRAT BORA</h3>
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
        <div className="info">
          <div className="imgdiv">
            <div className="insidediv"></div>
          </div>
          <div className="textdiv">
            <div className="upper-text">
              <p className="textcolor">
                <span className="link-about" onClick={gotoAbout}>
                  Hey, I'm Anubrat.
                </span>{" "}
                I'm a product
                <br />
                manager and data scientist.
              </p>
            </div>
            <div className="lower-text">
              <div className="twitter" id="logo-div">
                <div className="logoA" id="logowaliId">
                  <a
                    href="https://twitter.com/anubrat25"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter} alt="Twitter logo" id="logo" />
                  </a>
                </div>
                <p className="social-text" id="twitter">
                  <a
                    href="https://twitter.com/anubrat25"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </p>{" "}
              </div>
              <div className="Github" id="logo-div">
                <div className="logoB" id="logowaliId">
                  <a
                    href="https://github.com/anubrat25"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="github logo" id="logo" />
                  </a>{" "}
                </div>
                <p className="social-text" id="github">
                  <a
                    href="https://github.com/anubrat25"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </p>
              </div>
              <div className="LinkedIn" id="logo-div">
                <div className="logoC" id="logowaliId">
                  <a
                    href="https://www.linkedin.com/in/anubrat-bora-044ba2187/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="LinkedIn logo" id="logo" />
                  </a>
                </div>
                <p className="social-text" id="linkedin">
                  <a
                    href="https://www.linkedin.com/in/anubrat-bora-044ba2187/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="recent-div">
          <h2>RECENT POSTS</h2>
          <Blog data={Blog1} />
          <Blog data={Blog2} />
          <Blog data={Blog3} />
          <button className="readMore">
            <p onClick={gotoBlogs}>Read more posts →</p>
          </button>
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
              <img src={linkedin} alt="LinkedIn logo" className="footer-logo" />
            </a>
          </div>
        </div>
        <div className="empty-div"></div>
      </div>
    </div>
  );
};

export default mainpage;
