import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";
import '../Styles/Footer.css';

export default function Footer() {
  return (
      <footer className="Footer">
            <div className="container">
                    <h2>Fr<span>es</span>hMart</h2>
                </div>
      <div className="footer-links">
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li><FiMail /> <a href="sodjifritas@gmail.com">sodjifritas@gmail.com</a></li>
            <li><FiPhone /> <a href="tel:+233205501747">+233205501747</a></li>
          </ul>
        </div>
      </div>
      <div className="social-media">
        <h4>Connect With Us</h4>
        <ul>
          <li><a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a></li>
          <li><a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a></li>
          <li><a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer"><GrInstagram /></a></li>
        </ul>
      </div>
      <div className="copyright">
        <p>&copy; 2024 YourWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
}
