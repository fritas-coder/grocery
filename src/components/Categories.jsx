import React from "react";

function Categories() {
  return (
    <div className="categories">
      <div class="dropdown">
        <button class="dropbtn">Categories</button>
        <div class="dropdown-content">
          <a href="/Sales">Sales</a>
          <a href="/Fruits">Fruits</a>
          <a href="/Vegetables">Vegetables</a>
          <a href="/Greenery">Greenery</a>
          <a href="/Cereals">Cereals</a>
          <a href="/Pasta">Pasta</a>
          <a href="/Dairy">Dairy</a>
          <a href="Beverage">Beverage</a>
          <a href="/Bread">Bread</a>
          <a href="/Sweets">Sweets</a>
        </div>
      </div>
    </div>
  );
}

export default Categories;
