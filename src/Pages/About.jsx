import React from "react";
import { FaAward } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import "../Styles/About.css";

export default function About() {
  return (
    <div className="About">
      <div className="intro">
        <h3>Welcome to Our Website!</h3>
        <p>
          We're dedicated to providing fresh produce and pantry essentials with
          speed and convenience.
        </p>
      </div>
      <div className="mission">
        <h3>Our Mission</h3>
        <p>
          Our mission is to revolutionize the grocery shopping experience by
          delivering top-quality products to your doorstep in the shortest time
          possible.
        </p>
      </div>
      <div className="team">
        <h3>Meet Our Team</h3>
        <div className="team-members"></div>
      </div>
      <div className="history">
        <h3>Our History</h3>
        <p>
          Founded in [year], our website has grown from a small startup to a
          leading online grocery platform. We've continuously evolved to meet
          the changing needs of our customers.
        </p>
      </div>
      <div className="usp">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Fast delivery in 30 minutes or less</li>
          <li>Wide selection of fresh produce and pantry essentials</li>
          <li>Exceptional customer service</li>
        </ul>
      </div>
      <div className="testimonials">
        <h3>What Our Customers Say</h3>
      </div>
      <div className="contact">
        <h3>Contact Us</h3>
        <p>
          If you have any questions or feedback, feel free to reach out to us:
        </p>
        <ul>
          <li>
            <FiMail /> Email: sodjifritas@gmail.com
          </li>
          <li>
            <FiPhone /> Phone: +233205501747
          </li>
        </ul>
      </div>
      <div className="awards">
        <h3>Awards & Recognition</h3>
        <p>We're proud to have received the following awards:</p>
        <ul>
          <li>
            <FaAward /> Best Online Grocery Platform - [Year]
          </li>
        </ul>
      </div>
      <div className="cta">
        <h3>Ready to Get Started?</h3>
        <p>
          Place your first order today and experience the convenience of online
          grocery shopping!
        </p>
        <br />
        <button>
          <a href="/cards">Order Now</a>
        </button>
      </div>
    </div>
  );
}
