import React, { Component } from "react";
import { connect } from "react-redux";

import { buyProduct } from "../redux/actions";

class Product extends Component {
  render() {
    const { title, price, brand, img } = this.props;

    return (
      <div className="col-lg-4">
        <div className="catalogItem">
          <div className="catalogItem_img">
            <img src={img} alt={title} />
          </div>
          <div className="catalogItem__name">{title}</div>
          <div className="catalogItem__brand">
            Бренд: <strong>{brand}</strong>
          </div>
          <div className="catalogItem__prices">
            <strong>Цена: {price}</strong>
          </div>
          <button className="catalogItem__btn" onClick={this.buyProduct}>
            Купить
          </button>
        </div>
      </div>
    );
  }

  buyProduct = () => {
    const { title, price, img, buyProduct } = this.props;

    const product = {
      title,
      price,
      img
    };

    buyProduct(product);
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyProduct: product => dispatch(buyProduct(product))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Product);
