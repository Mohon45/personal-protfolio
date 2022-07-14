import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="about contact">
      <div className="container">
        <div className="about-section-title pt-4">
          <h6>CONTACT</h6>
          <h1>CONTACT ME</h1>
        </div>

        <div class="row mt-2">
          <div class="col-md-6 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bi bi-geo-alt"></i>
              <h3>My Address</h3>
              <p>Puthia, Rajshahi, Bangladesh</p>
            </div>
          </div>

          <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bi bi-share"></i>
              <h3>Social Profiles</h3>
              <div class="social-links">
                <a
                  href="https://twitter.com/mohon_dev"
                  target="_blank"
                  class="twitter"
                >
                  <i class="bi bi-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100069159139897"
                  target="_blank"
                  class="facebook"
                >
                  <i class="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/md_mohon6/"
                  target="_blank"
                  class="instagram"
                >
                  <i class="bi bi-instagram"></i>
                </a>
                <a
                  href="https://github.com/Mohon45"
                  target="_blank"
                  class="google-plus"
                >
                  <i class="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-mohon-145a87216/"
                  target="_blank"
                  class="linkedin"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-6 mt-4 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bi bi-envelope"></i>
              <h3>Email Me</h3>
              <p>mdmohon6145@gmail.com</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bi bi-telephone"></i>
              <h3>Call Me</h3>
              <p>+8801782638193</p>
            </div>
          </div>
        </div>

        <form
          action="forms/contact.php"
          method="post"
          role="form"
          class="php-email-form mt-4"
        >
          <div class="row">
            <div class="col-md-6 form-group">
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div class="form-group mt-3">
            <input
              type="text"
              class="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div class="form-group mt-3">
            <textarea
              class="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div class="my-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div class="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
