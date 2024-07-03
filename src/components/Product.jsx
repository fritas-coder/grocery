import React from "react";
import "../Styles/Product.css";

export default function Product(props) {
  const { product,handleClick } = props;
  return (
    <div className="product block">
      <img src={product.image} alt={product.name} className="small" />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={()=>handleClick(product)}>Add to card</button>
      </div>
    </div>
  );
}
