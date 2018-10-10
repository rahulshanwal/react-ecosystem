import React from "react";
import Input from "../Input/Input";
import "./FieldSection.css";

const FieldSection = props => (
  <div className="field-section">
    <div>
      <label htmlFor={props.field}>{props.label}</label>
    </div>
    <div>
      <Input id={props.field} value={props.value} onChange={props.onChange}/>
    </div>
  </div>
);

export default FieldSection;
