import React from "react";
import { FaApple } from "react-icons/fa";
import Quote from "../components/Quote";
import "../Styles/Home.css";
// import RatedItems from '../components/RatedItems';

export default function Home() {
  return (
    <>
      <div className="Home">
        <div className="col1">
          <div className="title">
            <h1>
              <em>
                Hey! Looking for Fresh produce and pantry essentials? Check out
                our amazing grocery website!
              </em>
            </h1>
          </div>
          <div className="text">
            <small>
              Freshness and Speed at your Fingertips: Get groceries delivred in
              30 Minutes with our website or mobile app.
            </small>
          </div>
          <div className="buttons">
            <button className="btn1">
              <a href="/cards">Order Now</a>
            </button>
            <button className="btn2">
              <FaApple className="faApple" />{" "}
              <a href="URL_TO_DOWNLOAD_PAGE_OR_FILE" download>
                Download for iOS
              </a>
            </button>
          </div>
        </div>
        <div className="col2-img1">
          <img
            src="/img/imgG/home2.png"
            alt="img"
            width={"470px"}
            className="img2"
          />
        </div>
        <div></div>
      </div>
      {/* <RatedItems/> */}
      <Quote />
    </>
  );
}
