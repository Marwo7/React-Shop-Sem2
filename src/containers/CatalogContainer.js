import { connect } from "react-redux";
import { showAllProducts } from "../actions/actions";
import Catalog from "../components/Catalog/Catalog";

const mapStateToProps = state => ({
  productsInfo: state.productsInfo
});

const mapDispatchToProps = { showAllProducts };

const CatalogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);

export default CatalogContainer;
