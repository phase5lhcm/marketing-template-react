import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col solutions">
          <h6>Solutions</h6>
          <ul>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
          </ul>
        </div>
        <div className="col support">
          <h6>Support</h6>
          <ul>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
          </ul>
        </div>
        <div className="col ecomm">
          <h6>Ecomm</h6>
          <ul>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
          </ul>
        </div>
        <div className="col global">
          <h6>Around the Globe</h6>
          <ul>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
            <Link to="/" className="link">
              Lorem, ipsum.
            </Link>
          </ul>
        </div>
        <div className="subscribe">
          <div>
            <h6>Subscribe to our newsletter</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p className="subscribe">
              <input type="email" placeholder="Email" />
              <button>Subscribe</button>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="content">
          <p className="rights">
            <p>&copy; Christinerem. All rights reserved</p>
          </p>
          <div>
            <FaFacebook
              size={20}
              style={{ color: "d3d3d3", marginRight: "10px" }}
            />
          </div>
          <div>
            <FaInstagram
              size={20}
              style={{ color: "d3d3d3", marginRight: "10px" }}
            />
          </div>
          <div>
            <FaGithub
              size={20}
              style={{ color: "d3d3d3", marginRight: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
