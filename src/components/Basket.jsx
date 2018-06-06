import React, { Component } from "react";
import { connect } from "react-redux";

import BasketItem from "./BasketItem";

class Basket extends Component {
  render() {
    const { boughtProducts } = this.props;

    return (
      <div className="cartCell">
        <div className="cartCell__link">
          корзина <span>{boughtProducts.length}</span>
        </div>
        <div className="dropCel g-open">
          <ul class="cart">
            {boughtProducts.map(item => <BasketItem {...item} />)}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    boughtProducts: state.boughtProducts
  };
}

export default connect(mapStateToProps)(Basket);
