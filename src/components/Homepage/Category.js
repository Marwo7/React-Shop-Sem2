import React from "react";
import ProductContainer from "../../containers/ProductContainer";

const Category = props => {
  return (
    <section>
      <h2 class="header-small">{props.title}</h2>
      <div class="products">
        {props.products.map(product => (
          <ProductContainer
            name={product.name}
            image={product.image}
            price={product.amount}
            key={product.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
