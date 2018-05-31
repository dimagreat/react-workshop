import React, { Component } from "react";
import { connect } from "react-redux";

class Basket extends Component {
  render() {
    const { boughtProducts } = this.props;

    return (
      <div>{boughtProducts.map(({ title, price }) => <div>{title}</div>)}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    boughtProducts: state.boughtProducts
  };
}

export default connect(mapStateToProps)(Basket);
