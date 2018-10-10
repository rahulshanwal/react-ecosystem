import React from "react";
import "./Input.css";

const Input = props => (
  <input {...props} className={props.invalid ? "invalid" : ""}>{props.children}</input>
)

export default Input;
