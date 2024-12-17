import React from "react";
import "../src/CssFiles/mainpage.css";
import "./CssFiles/about.css";
import { useHref, useNavigate } from "react-router-dom";
import twitter from "../public/twitter.svg";
import github from "../public/github.svg";
import linkedin from "../public/linkedin.svg";

const about = () => {
  const navigate = useNavigate();
  const gotoMain = () => {
    navigate("/");
  };
  const gotoBlogs = () => {
    navigate("/blogs");
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
              <button className="about-button" id="nav-but-id">
                About
              </button>
              <button
                className="blog-button"
                id="nav-but-id"
                onClick={gotoBlogs}
              >
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
          <div className="about-content">
            <div className="about-header">Hey, I'm Anubrat 👋</div>
            <div className="first-div">
              Born almost eight thousand days ago. Right now, I'm a junior year,
              Computer Science student at{" "}
              <a
                href="https://www.manipal.edu/mu.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Manipal Academy of Higher Education
              </a>
              .
            </div>
            <div className="second-div">
              I genuinely love exploring Data Science and AI, as they offer
              mathematical insights. I enjoy experimenting with new ideas and
              techniques to solve complex problems. If I'm not working on a
              project, you might find me reading or writing something new.
            </div>
            <div className="third-div">
              If you want to get in touch, I'm most responsive over{" "}
              <a
                href="mailto:your-anubratbora25@gmail.com"
                rel="noopener noreferrer"
              >
                email
              </a>{" "}
              and I tend to be pretty active on{" "}
              <a
                href="https://x.com/anubrat25"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{" "}
              as well.
            </div>
            <div className="about-subheader">PREVIOUSLY</div>
            <div className="fourth-div">
              Most recently, I worked on building chatbots as a Machine Learning
              Engineer at{" "}
              <a
                href="https://nexusinfo.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nexus Info
              </a>
              , an early-stage startup in Chennai, TN, India. Before that, I was
              a Backend Development Trainee at{" "}
              <a
                href="https://tsinfosec.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tech Savvy Software & Security Consultancy{" "}
              </a>
              in Guwahati, AS, India. I graduated high school from{" "}
              <a
                href="https://golaghat.vkv.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vivekananda Kendra Vidyalaya, Golaghat
              </a>
              , AS, India, completing both my 10th and 12th grades. I have always had a
              strong inclination toward mathematics and problem-solving, which
              continues to this day. I'm enjoying my engineering studies as a
              Computer Science student and hope to collaborate with startups on
              various projects.
            </div>
            <div className="myfooter">
              <div className="left">©️ Anubrat Bora</div>
              <div class="right">
                <a
                  href="https://twitter.com/anubrat25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitter}
                    alt="Twitter logo"
                    className="footer-logo"
                  />
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
    </div>
  );
};

export default about;
