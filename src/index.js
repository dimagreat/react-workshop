import React from "react";
import {
  render
} from "react-dom";
import { Provider } from 'react-redux'

import App from "./components/app/App";
import store from './redux/store';

import "./index.css";

const target = document.querySelector("#root");

render( <Provider store={store}><App /></Provider>,  target);