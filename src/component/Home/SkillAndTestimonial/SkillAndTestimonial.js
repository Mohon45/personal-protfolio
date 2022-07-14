import React from "react";
import "./SkillAndTestimonial.css";

const SkillAndTestimonial = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-section-title pt-4">
          <h6>MY SKILL</h6>
        </div>

        <div className="row">
          <div className="col-md-3 mt-4">
            <div class="icon-box">
              <i
                class="fa-brands fa-html5 fa-2x"
                style={{ color: "#ffbb2c" }}
              ></i>
              <h3>Html</h3>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div class="icon-box">
              <i
                class="fa-brands fa-css3 fa-2x"
                style={{ color: "#5578ff" }}
              ></i>
              <h3>Css</h3>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div class="icon-box">
              <i
                class="fa-brands fa-bootstrap fa-2x"
                style={{ color: "#8B12FC" }}
              ></i>
              <h3>Bootstrap</h3>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div class="icon-box">
              <i
                class="fa-brands fa-css3 fa-2x"
                style={{ color: "#e80368" }}
              ></i>
              <h3>Tailwind Css</h3>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div class="icon-box">
              <i
                class="fa-brands fa-js-square fa-2x"
                style={{ color: "#e361ff" }}
              ></i>
              <h3>Javascript</h3>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div class="icon-box">
              <i
                class="fa-brands fa-react fa-2x"
                style={{ color: "#47aeff" }}
              ></i>
              <h3>React.JS</h3>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div class="icon-box">
              <img
                className="skill-img-custom"
                src="https://i.ibb.co/w44Zg5x/redux-removebg-preview.png"
                alt=""
              />
              <h3>Redux</h3>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div class="icon-box">
              <img
                className="skill-img-custom"
                src="https://i.ibb.co/NYk922Z/firebase-w.png"
                alt=""
              />
              <h3>Firebase</h3>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div class="icon-box">
              <i
                class="fa-brands fa-node fa-2x"
                style={{ color: "#3E863B" }}
              ></i>
              <h3>Node.JS</h3>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div class="icon-box">
              <img
                className="skill-img-custom"
                src="https://i.ibb.co/PTf1Zd4/express-w.png"
                alt=""
              />
              <h3>Express.JS</h3>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div class="icon-box">
              <img
                className="skill-img-custom"
                src="https://i.ibb.co/NT9jjXf/mo429m311-mongodb-logo-mongodb-logo-removebg-preview.png"
                alt=""
              />
              <h3>MongoDB</h3>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div class="icon-box">
              <i
                class="fa-brands fa-git-alt fa-2x"
                style={{ color: "#ff5828" }}
              ></i>
              <h3>Git</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAndTestimonial;
