import React, { Component } from "react";

export default class Search extends Component {
  state = {
    searchText: ""
  };

  render() {
    return (
      <div className="Search">
        <input type="text" onChange={this.onChangeText} />
      </div>
    );
  }

  onChangeText = searchText => this.setState({ searchText });
}
