import React, { Component } from "react";
import { connect } from "react-redux";

import { buyProduct } from "../../redux/actions";

class Product extends Component {
  render() {
    const { title, price, brand, img } = this.props;

    return (
      <div>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>
          Бренд: <strong>{brand}</strong>
        </p>
        <p>
          <strong>Цена: {price}</strong>
        </p>
        <button onClick={this.buyProduct}>Купить</button>
      </div>
    );
  }

  buyProduct = () => {
    const { title, price, buyProduct } = this.props;

    const product = {
      title,
      price
    };

    buyProduct(product);
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyProduct: product => dispatch(buyProduct(product))
  };
}

export default connect(null, mapDispatchToProps)(Product);
