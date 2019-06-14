import React from "react";

const Product = ({ name, price, image, addToCart }) => {
  const addingToCart = () => {
    addToCart({ name, price });
  };

  return (
    <div class="product">
      <img src={image} alt={name} />
      <p class="price">${price}</p>
      <h3>{name}</h3>
      <button className="add-to-cart" onClick={addingToCart}>
        Add to cart
      </button>
    </div>
  );
};
export default Product;
