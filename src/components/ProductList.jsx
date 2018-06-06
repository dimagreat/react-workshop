import React, { Component } from "react";
import { connect } from "react-redux";

import Product from "./Product";

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="row">
        {products.map((product, key) => <Product {...product} key={key} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(ProductList);
