import React, { useEffect } from "react";
import Container from "../Functional/Container";
import Category from "./Category";
import ProductsFunctions from "../Functional/ProductsFunctions";

const Homepage = ({
  showAllProducts,
  productsInfo: { products, isError, isLoading }
}) => {
  useEffect(() => {
    showAllProducts();
  }, []);
  const desktops = ProductsFunctions.featuredDesktops(products);
  const tablets = ProductsFunctions.featuredTablets(products);
  if (isLoading) {
    return <h2>Loading, please be patient.</h2>;
  }
  if (isError) {
    return <h2>Error</h2>;
  }

  return (
    <Container>
      <h1 class="header-big">Welcome to our store</h1>

      <Category title={"Desktops"} products={desktops} />

      <Category title={"Tablets"} products={tablets} />
    </Container>
  );
};
export default Homepage;
