import React from "react";
import "./Experiences.css";

const Experiences = () => {
  return (
    <div>
      <section id="resume" class="resume pt-5">
        <div class="container">
          <div class="section-title">
            <h6>EXPERIENCES</h6>
            <h1>CHECK MY EXPERIENCES</h1>
          </div>

          <div class="row mt-5">
            <div class="col-lg-6">
              <div class="resume-item pb-0">
                <h4>
                  SUN IT LIMITED{" "}
                  <span className="experience-subtitle">
                    ( Rajshahi, Bangladesh )
                  </span>
                </h4>
                <h5>Frontend Developer(Intern) | November 2021 - April 2022</h5>

                <p>
                  <ul>
                    <li>
                      Here I am worked with HTML, CSS, Bootstrap, Javascript,
                      React, Redux, etc.
                    </li>
                    <li>
                      I did learned and worked with the latest technologies.
                    </li>
                    <li>
                      Here I have to complete all aspects of UI and Api
                      functionality.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="resume-item">
                <h4>
                  Mangrove Software and IT{" "}
                  <span className="experience-subtitle">( USA Based )</span>
                </h4>
                <h5>Software Developer | 01 November, 2022 - Current</h5>

                <p>
                  <ul>
                    <li>
                      Here I am working as a full-stack developer based on MERN
                      Stack.
                    </li>
                    <li>
                      I build a UI by React.js in Frontend and create a backend
                      API endpoint in Node.js
                    </li>
                    <li>
                      Here I have to complete all aspects of UI and backend.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
