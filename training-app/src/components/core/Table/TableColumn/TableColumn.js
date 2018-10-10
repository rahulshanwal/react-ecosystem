import React from "react";
import "./TableColumn.css";

const TableColumn = props => (
  <td className="table-column">{props.children}</td>
)

export default TableColumn;
