import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../../redux/actions";

class Search extends Component {
  state = {
    searchText: ""
  };

  render() {
    return (
      <div className="Search">
        <input type="text" onChange={this.onChangeText} />
        <button onClick={this.onSearch}>Search</button>
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

export default connect(null, mapDispatchToProps)(Search);
