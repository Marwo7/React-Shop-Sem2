import { connect } from "react-redux";
import { addToCart } from "../actions/actions";
import Product from "../components/Functional/Product";

const mapDispatchToProps = { addToCart };

const ProductContainer = connect(
  null,
  mapDispatchToProps
)(Product);

export default ProductContainer;
