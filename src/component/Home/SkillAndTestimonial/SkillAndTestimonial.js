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

        {/* testimonials section start*/}

        <div className="testimonials mt-4">
          <div className="about-section-title pt-4">
            <h6 className="m-0 p-0">TESTIMONIALS</h6>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="testimonial-item text-white">
                <p>
                  <i class="fa-solid fa-quote-left quote"></i>&nbsp; Md.Mohon
                  has completed a rigorous amountof javascript, HTML, CSS,
                  React. Also completed three projects in React and performed
                  among the top 5% of the class. We found Md. Mohon hard
                  Working, dedicated and quick learner, who can finish the
                  assigned task on time. &nbsp;
                  <i class="fa-solid fa-quote-right quote"></i>
                </p>
                <img src="https://i.ibb.co/1L6vWwz/jhanker-mahbub.png" alt="" />
                <h3>Jhanker Mahbub</h3>
                <h4>CEO at Programming Hero</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-item text-white">
                <p>
                  <i class="fa-solid fa-quote-left quote"></i>&nbsp; Md.Mohon
                  has completed a rigorous amountof javascript, HTML, CSS,
                  React. Also completed three projects in React and performed
                  among the top 5% of the class. We found Md. Mohon hard
                  Working, dedicated and quick learner, who can finish the
                  assigned task on time. &nbsp;
                  <i class="fa-solid fa-quote-right quote"></i>
                </p>
                <img src="https://i.ibb.co/K5rZqKR/alom-vai.jpg" alt="" />
                <h3>Jhanker Mahbub</h3>
                <h4>CEO at Programming Hero</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-item text-white">
                <p>
                  <i class="fa-solid fa-quote-left quote"></i>&nbsp; Md.Mohon
                  has completed a rigorous amountof javascript, HTML, CSS,
                  React. Also completed three projects in React and performed
                  among the top 5% of the class. We found Md. Mohon hard
                  Working, dedicated and quick learner, who can finish the
                  assigned task on time. &nbsp;
                  <i class="fa-solid fa-quote-right quote"></i>
                </p>
                <img src="https://i.ibb.co/1L6vWwz/jhanker-mahbub.png" alt="" />
                <h3>Jhanker Mahbub</h3>
                <h4>CEO at Programming Hero</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAndTestimonial;
