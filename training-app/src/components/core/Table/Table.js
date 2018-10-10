import React from "react";
import TableHeader from "./TableHeader/TableHeader";

const Table = props => {
  return (
  <table>
      {props.headers.map((header, i)=>{
        return <TableHeader key={i}>{header}</TableHeader>
      })}
      {props.children}
  </table>
)
}

export default Table;
