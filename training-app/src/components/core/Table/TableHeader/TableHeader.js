import React from "react";
import "./TableHeader.css";

const TableHeader = props => (
  <th {...props} className="table-header">{props.children}</th>
)

export default TableHeader;
