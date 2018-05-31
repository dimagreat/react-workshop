import React, { Component } from "react";
import { connect } from "react-redux";

import Search from "../search/Search";
import ProductList from "../product-list/ProductList";
import Basket from "../basket/Basket";

import { fetchProducts } from "../../redux/actions";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Search />
        </header>
        <main>
          <Basket products={[]} />
          <ProductList />
        </main>
      </div>
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

export default connect(null, mapDispatchToProps)(App);
