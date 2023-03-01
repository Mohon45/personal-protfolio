import React from "react";
import Counter from "../../../Const/Counter/Counter";
import myImage from "../../../images/my-photo.jpg";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container" data-aos="fade-up" data-aos-duration="3000">
        <div className="about-section-title pt-4">
          <h6>ABOUT</h6>
          <h1>LEARN MORE ABOUT ME</h1>
        </div>
        <div className="row d-flex align-items-center my-5">
          <div className="col-md-4 about-left-side">
            <img src={myImage} alt="" />
          </div>
          <div className="col-md-8 px-5 about-right-side text-white">
            <h1>MERN-Stack & Frontend Developer</h1>
            <p>
              Assalamuoalaikum! I'm Md.Mohon as a Professonal MERN-Stack &
              Frontend Developer from Bangladesh. Thanks for scrolling this
              far!! 🤗 My Background however has always been designe-driving.
              I've always been excited with the idea of crafting something that
              people can interact with. Anyway I am frotend web developer with
              solid knowledge in different Technology & enough experience and
              creating & designing super responsive website.
            </p>
            <p>
              I love writing clean code, and pushing my skills to the limit. My
              interests include joining an exciting team of passionate people,
              personal growth, and making silly faces.
            </p>
            {/* <div className="row mt-5">
              <div className="col-md-6">
                <p>
                  <span style={{ color: "#18d26e" }}>&#10095;</span> &nbsp;
                  <span style={{ fontWeight: "bold" }}>BirthDay:</span> &nbsp;
                  10 Oct 2002
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <span style={{ color: "#18d26e" }}>&#10095;</span> &nbsp;
                  <span style={{ fontWeight: "bold" }}>Age:</span> &nbsp; 19
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <span style={{ color: "#18d26e" }}>&#10095;</span> &nbsp;
                  <span style={{ fontWeight: "bold" }}>Website:</span> &nbsp;
                  www.example.com
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <span style={{ color: "#18d26e" }}>&#10095;</span> &nbsp;
                  <span style={{ fontWeight: "bold" }}>Degree:</span> &nbsp;
                  Diploma In-Engineering(Running)
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <span style={{ color: "#18d26e" }}>&#10095;</span> &nbsp;
                  <span style={{ fontWeight: "bold" }}>Phone:</span> &nbsp;
                  +8801782638193
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <span style={{ color: "#18d26e" }}>&#10095;</span> &nbsp;
                  <span style={{ fontWeight: "bold" }}>Email:</span> &nbsp;
                  mdmohon6145@gmail.com
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <span style={{ color: "#18d26e" }}>&#10095;</span> &nbsp;
                  <span style={{ fontWeight: "bold" }}>City:</span> &nbsp;
                  Rajshahi, Bangladesh
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <span style={{ color: "#18d26e" }}>&#10095;</span> &nbsp;
                  <span style={{ fontWeight: "bold" }}>Job:</span> &nbsp;
                  Available
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="row counter py-5">
          <div className="col-md-3">
            <div className="counter-item">
              <i className="bi bi-emoji-smile-fill"></i>

              <h1 className="mt-2">
                <Counter className="count" end={50} />
              </h1>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter-item">
              <i className="bi bi-journal-richtext"></i>
              <h1 className="mt-2">
                <Counter className="count" end={25} />
              </h1>
              <p>Projects</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter-item">
              <i className="bi bi-github"></i>
              <h1 className="mt-2">
                <Counter className="count" end={100} />
              </h1>
              <p>Repository</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter-item">
              <i className="bi bi-award"></i>
              <h1 className="mt-2">
                <Counter className="count" end={5} />
              </h1>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
