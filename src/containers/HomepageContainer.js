import { connect } from "react-redux";
import { showAllProducts } from "../actions/actions";
import Homepage from "../components/Homepage/Homepage";

const mapStateToProps = state => ({
  productsInfo: state.productsInfo
});

const mapDispatchToProps = { showAllProducts };

const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);

export default HomepageContainer;
