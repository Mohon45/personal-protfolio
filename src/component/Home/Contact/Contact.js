import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // clear from
    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm(
        "service_qds1sbr",
        "template_i0b4vxw",
        form.current,
        "user_2V7fKrmcWiAC13MEdXRqb"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong! Try to latter.");
        }
      );
  };
  return (
    <div id="contact" className="about contact">
      <div className="container">
        <div className="about-section-title pt-4">
          <h6>CONTACT</h6>
          <h1>CONTACT ME</h1>
        </div>

        <div className="row mt-2">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bi bi-geo-alt"></i>
              <h3>My Address</h3>
              <p>Puthia, Rajshahi, Bangladesh</p>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bi bi-share"></i>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a
                  href="https://twitter.com/mohon_dev"
                  target="_blank"
                  className="twitter"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100069159139897"
                  target="_blank"
                  className="facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/md_mohon6/"
                  target="_blank"
                  className="instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://github.com/Mohon45"
                  target="_blank"
                  className="google-plus"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-mohon-145a87216/"
                  target="_blank"
                  className="linkedin"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bi bi-envelope"></i>
              <h3>Email Me</h3>
              <p>mdmohon6145@gmail.com</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bi bi-telephone"></i>
              <h3>Call Me</h3>
              <p>+8801782638193</p>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          role="form"
          className="php-email-form mt-4"
        >
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="user_name"
                className="form-control"
                onChange={(event) => setName(event.target.value)}
                value={name}
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="user_email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                placeholder="Enter Your Email"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div className="text-center mt-3">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
