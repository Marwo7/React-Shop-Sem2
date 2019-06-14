import { connect } from "react-redux";
import Header from "../components/Functional/Header";

const mapStateToProps = state => ({
  productsInCart: state.productsInCart
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
