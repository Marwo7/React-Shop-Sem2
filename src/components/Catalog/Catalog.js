import React, { useEffect, useState } from "react";
import Container from "../Functional/Container";
import Search from "./Search";
import ProductsFunctions from "../Functional/ProductsFunctions";
import ProductContainer from "../../containers/ProductContainer";

const Catalog = ({
  showAllProducts,
  productsInfo: { products, isError, isLoading }
}) => {
  const [searchProducts, setSearchProducts] = useState(products);
  const [searchProductsBoolean, setSearchProductsBoolean] = useState(false);

  useEffect(() => {
    showAllProducts();
  }, []);
  useEffect(() => {
    if (!searchProducts.length && !searchProductsBoolean && products.length) {
      setSearchProducts(products);
      setSearchProductsBoolean(true);
    }
  });

  if (isLoading) {
    return <h2>Loading, please be patient.</h2>;
  }
  if (isError) {
    return <h2>Error</h2>;
  }

  const refreshList = (producent, name) => {
    let filteredProducts = products;

    if (producent !== "All") {
      filteredProducts = ProductsFunctions.filterByProducent(producent);
    }

    if (name) {
      filteredProducts = ProductsFunctions.filterByName(name, filteredProducts);
    }
    setSearchProducts(filteredProducts);
  };
  const producentsChange = ["All", ...ProductsFunctions.getProducents()];
  return (
    <Container>
      <h1 class="header-big">Catalog</h1>

      <div class="catalog">
        <Search
          onChangeOption={refreshList}
          producentsChange={producentsChange}
        />

        <div class="column-right">
          <div class="products">
            {searchProducts.map(product => (
              <ProductContainer
                name={product.name}
                price={product.amount}
                image={product.image}
                key={product.id}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Catalog;
