import "dotenv/config";
import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
require("dotenv").config();
//USE this file for initializing the main page

ReactDOM.render(<Main />, document.getElementById("root"));
