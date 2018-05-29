import React, { Component } from "react";
import { connect } from "react-redux";

class Basket extends Component {
  render() {
    const { products } = this.props;

    return <div>{products.map(({ title, price }) => <div>{title}</div>)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(Basket);
