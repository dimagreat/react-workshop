import React, { Component } from "react";
import { connect } from "react-redux";

import { addProduct } from "../../redux/actions";

class Product extends Component {
  render() {
    const { title, price } = this.props;

    return (
      <div onClick={this.addProduct}>
        <h1>{title}</h1>
        <h2>{price}</h2>
      </div>
    );
  }

  addProduct = () => {
    const { title, price, addProduct } = this.props;

    const product = {
      title,
      price
    };

    addProduct(product);
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addProduct: product => dispatch(addProduct(product))
  };
}

export default connect(null, mapDispatchToProps)(Product);
