import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import ProductList from "./ProductList";
import Header from "./Header";
import FooterText from "./FooterText";
import Footer from "./Footer";

import { fetchProducts } from "../redux/actions";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section className="main">
          <div className="container">
            <ProductList />
            <FooterText />
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }

  componentDidMount() {
    this.props.fetchProducts();
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
