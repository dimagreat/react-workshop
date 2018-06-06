import React from "react";

export default props => {
  return (
    <li className="item">
      <div className="item__img">
        <img src={props.img} alt="pic" />
      </div>
      <ul className="item__date">
        <li className="name">{props.title}</li>
        <li className="count">
          <span className="count__decrease">-</span>
          <span className="count__sum">5</span>
          <span className="count__increase">+</span>
        </li>
        <li className="prices">Цена {props.price} грн</li>
      </ul>
      <div className="item__delete">
        <i className="fas fa-times" />
      </div>
    </li>
  );
};
