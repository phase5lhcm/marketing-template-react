import React from "react";
import "../styles/PricingStyles.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-container">
        <div className="top-content">
          <div>
            <h2>
              Everything you need for <span>$99 a month</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              debitis.
            </p>
          </div>
          <div className="btn-div">
            <button>Lorem, ipsum dolor.</button>
          </div>
        </div>
        <div className="bottom-content">
          <div className="card">
            <p>
              <span>Everything you beed</span>
            </p>
            <h3>All-in-one platform</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, repellat nihil facilis deserunt blanditiis delectus
              pariatur atque quasi quibusdam sint!
            </p>
          </div>
          <div className="card">
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
