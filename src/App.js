import React from "react";
import Footer from "./components/Functional/Footer";
import "./App.css";
import About from "./components/About/About";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import HeaderContainer from "./containers/HeaderContainer";
import store from "./store/store";
import CatalogPage from "./pages/CatalogPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <Provider store={store}>
      <HeaderContainer />
      <Route exact path="/" component={Home} />
      <Route path="/catalog" component={CatalogPage} />
      <Route path="/about" component={About} />
      <Footer />
    </Provider>
  );
};

export default App;
