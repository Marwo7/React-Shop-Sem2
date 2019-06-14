import products from "../../products/products";

class ProductsFunctions {
  static featuredDesktops() {
    let featuredDesktopsArray = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === "desktop" && products[i].featured === true) {
        featuredDesktopsArray.push(products[i]);
      }
    }
    return featuredDesktopsArray;
  }

  static featuredTablets() {
    let featuredTabletsArray = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === "tablet" && products[i].featured === true) {
        featuredTabletsArray.push(products[i]);
      }
    }
    return featuredTabletsArray;
  }

  static getProducents() {
    return products
      .map(product => product.manufacture)
      .filter(
        (manufacture, index, manufactures) =>
          manufactures.indexOf(manufacture) === index
      );
  }

  static filterByProducent(producent) {
    let filterByProducentArray = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].manufacture === producent) {
        filterByProducentArray.push(products[i]);
      }
    }
    return filterByProducentArray;
  }

  static filterByName(name, products) {
    let filterByNameArray = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].name.toLowerCase().includes(name.toLowerCase())) {
        filterByNameArray.push(products[i]);
      }
    }
    return filterByNameArray;
  }
}
export default ProductsFunctions;
