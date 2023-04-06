import React from "react";
import "./MyProjects.css";

const MyProjects = () => {
  return (
    <div id="projects" className="about py-5">
      <div className="container">
        <div className="about-section-title pt-4">
          <h6>PROJECTS</h6>
          <h1>MY PROJECTS</h1>
        </div>

        <div className="row text-white mt-4">
          <div className="col-md-6 mb-4">
            <div className="single-project our-team">
              <h1 className="">E-Tutors</h1>
              <div className="single-project-img">
                <img
                  src="https://i.ibb.co/CzYhQSz/Screenshot-2023-04-06-023726.png"
                  alt=""
                />
              </div>
              <div className="content">
                <span className="post">Learning Management Website</span>
                <div className="d-flex justify-content-evenly social mt-3">
                  <a
                    href="https://github.com/Mohon45/learning-management-system-frontend"
                    target="_blank"
                    className="source-code-hover"
                  >
                    <div className="d-flex align-items-center">
                      <i className="fa-brands fa-github fa-3x me-2"></i>
                      <h4>Code</h4>
                    </div>
                  </a>

                  <a
                    href="https://e-tutors-ada6f.web.app/"
                    target="_blank"
                    className="source-code-hover"
                  >
                    <div className="d-flex align-items-center">
                      <i className="fa-brands fa-chrome fa-3x me-2"></i>
                      <h4>Live Site</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="single-project our-team">
              <h1 className="">Cycle House</h1>
              <div className="single-project-img">
                <img src="https://i.ibb.co/bsXL1Yn/cycle-house.png" alt="" />
              </div>
              <div className="content">
                <span className="post">E-Commarce Website</span>
                <div className="d-flex justify-content-evenly social mt-3">
                  <a
                    href="https://github.com/Mohon45/The-Cycle-House-Website"
                    target="_blank"
                    className="source-code-hover"
                  >
                    <div className="d-flex align-items-center">
                      <i className="fa-brands fa-github fa-3x me-2"></i>
                      <h4>Code</h4>
                    </div>
                  </a>

                  <a
                    href="https://cycle-house-86558.web.app/"
                    target="_blank"
                    className="source-code-hover"
                  >
                    <div className="d-flex align-items-center">
                      <i className="fa-brands fa-chrome fa-3x me-2"></i>
                      <h4>Live Site</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="single-project our-team">
              <h1 className="">BSMRAU</h1>
              <div className="single-project-img">
                <img src="https://i.ibb.co/wLPCzF5/bsmraus.png" alt="" />
              </div>
              <div className="content">
                <span className="post">
                  বঙ্গবন্ধু শেখ মুজিবুর রহমান কৃষি বিশ্ববিদ্যালয়
                </span>
                <div className="d-flex justify-content-evenly social mt-3">
                  <a href="#" className="source-code-hover">
                    <div className="d-flex align-items-center">
                      <i className="fa-brands fa-github fa-3x me-2"></i>
                      <h4>Code</h4>
                    </div>
                  </a>

                  <a
                    href="https://convocation.bsmrau.edu.bd/"
                    target="_blank"
                    className="source-code-hover"
                  >
                    <div className="d-flex align-items-center">
                      <i className="fa-brands fa-chrome fa-3x me-2"></i>
                      <h4>Live Site</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="single-project our-team">
              <h1 className="">Varendra IT</h1>
              <div className="single-project-img">
                <img src="https://i.ibb.co/6BCtB4w/vit.png" alt="" />
              </div>
              <div className="content">
                <span className="post">Varendra IT is a Traning Center</span>
                <div className="d-flex justify-content-evenly social mt-3">
                  <a
                    href="https://github.com/Mohon45/Varendra-IT-Polytechnic-Care"
                    target="_blank"
                    className="source-code-hover"
                  >
                    <div className="d-flex align-items-center">
                      <i className="fa-brands fa-github fa-3x me-2"></i>
                      <h4>Code</h4>
                    </div>
                  </a>

                  <a
                    href="https://www.varendrait.com/"
                    target="_blank"
                    className="source-code-hover"
                  >
                    <div className="d-flex align-items-center">
                      <i className="fa-brands fa-chrome fa-3x me-2"></i>
                      <h4>Live Site</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
