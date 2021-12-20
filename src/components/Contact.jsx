import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "../styles/ContactStyles.css";

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="col-1">
          <div className="content">
            <div>
              <h2>Get in touch</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                at eveniet nulla quam impedit nostrum unde sequi vel libero
                dolores!
              </p>
            </div>
            <div className="address">
              <p>000 Merry Lane</p>
              <p>Brooklyn, NY 99999</p>
            </div>
            <div className="icons">
              <FaPhone style={{ marginRight: "1rem" }} />
              <p>+1 (222) 222-2222</p>
            </div>
            <div className="icons">
              <FaEnvelope style={{ marginRight: "1rem" }} />
              <p>contactme@mail.com</p>
            </div>
            <div className="careers">
              <p>
                Looking for a job? <span>View jobs</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <form action="#">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Phone" />
            <textarea
              name="Message"
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
            <div className="check-box">
              <input type="checkbox" />
              <p>
                By checking this box, you agree to the{" "}
                <span>Privacy Policy</span> and <span>Cookie Policy</span>.
              </p>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
