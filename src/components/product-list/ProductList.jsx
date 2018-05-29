import React, { Component } from "react";

import ProductService from "../../services/ProductService";
import Product from "../../containers/product/Product";

export default class ProductList extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    const items = await ProductService.getProducts();
    this.setState({ items });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        {items.map(({ title, price }) => (
          <Product title={title} price={price} />
        ))}
      </div>
    );
  }
}
