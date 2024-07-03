import React, { useState } from "react";
import Product from "./Product";
import Categories from "../components/Categories";
import Search from "../components/Search";
import data from "../components/Back/Data/data";
import "../Styles/Card.css";

export default function Cards({ cart, setCart }) {
  const { products } = data;
  const [warning, setWarning] = useState(false);

  const handleClick = (product) => {
    let isPresent = false;
    for (const item of cart) {
      if (product.id === item.id) {
        isPresent = true;
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 2000);
        break;
      }
    }
    if (!isPresent) {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="cards">
      <Search />
      <div className="card1">
        <Categories />
        <div className="product-cont">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleClick={handleClick}
              cart={cart}
            />
          ))}
        </div>
        {warning && (
          <div className="warning">Item is already added to cart</div>
        )}
      </div>
    </div>
  );
}
