import React from "react";

import Search from "./Search";
import Basket from "./Basket";

export default () => {
  return (
    <header>
      <div className="container">
        <div className="header-wrap">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <img src="img/logo.png" alt="logo" />
              </div>
            </div>
            <div className="col-lg-6">
              <Search />
            </div>
            <div className="col-lg-3 d-flex justify-content-end">
              <Basket />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
