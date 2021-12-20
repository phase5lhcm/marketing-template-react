import React from "react";
import { FaDatabase } from "react-icons/fa";
import "../styles/TestimonialsStyles.css";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="outline">
          <div className="content">
            <i>
              <FaDatabase /> Staxx
            </i>
            <p className="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              natus quibusdam velit enim corporis praesentium repudiandae labore
              repellendus amet adipisci.
            </p>
            <div className="name">
              <p>Antionette Marium</p>
              <p>CEO of Staxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
