import React from "react";
import "../Styles/Filter.css"

export default function Filter() {

  return (
    <div className>
      <h3>Filter</h3>
      <div className="filter">
        <p>Price</p>
        <div className="from-to">
          <input type="text" placeholder="from" className="from" />
          <br />
          <input type="text" placeholder="to" className="to" />
        </div>
        <div className="sort">
          <p>Sort by</p>
          <button className="popu">popularity</button>
          <br />
          <button>a-z</button>
          <br />
          <button>z-a</button>
          <div className="on-off">
            <input type="checkbox" id="check" className="toggle" />
            <label htmlFor="check" className="button"></label>
            <span>Discount</span>
          </div>
        </div>
      </div>
    </div>
  );
}
