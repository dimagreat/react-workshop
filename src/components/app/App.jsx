import React, { Component } from "react";

import Search from "../search/Search";
import ProductList from "../product-list/ProductList";
import Basket from "../../containers/basket/Basket";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Search />
        </header>
        <main>
          <Basket products={[]} />
          <ProductList />
        </main>
      </div>
    );
  }
}

export default App;
