import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../redux/actions";

class Search extends Component {
  state = {
    searchText: ""
  };

  render() {
    return (
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Более 1000 товаров"
          onChange={this.onChangeText}
        />
        <button className="search__button" onClick={this.onSearch}>
          <i className="fas fa-search" />
        </button>
      </div>
    );
  }

  onSearch = () => {
    const { fetchProducts } = this.props;
    const { searchText } = this.state;

    const filter = searchText.length ? `?title=${searchText}` : "";

    fetchProducts(filter);
  };

  onChangeText = e => {
    this.setState({ searchText: e.target.value });
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: filter => dispatch(fetchProducts(filter))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
