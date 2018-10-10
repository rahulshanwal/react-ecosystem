import React from "react";
import "./Button.css";

const Button = props => (
  <button {...props} className="primaryButton">{props.children}</button>
)

export default Button;
