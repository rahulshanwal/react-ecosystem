import React from "react";
import "./Layout2080.css";

const Layout2080 = (regions) => (
  <React.Fragment>
    <div className="first-region region-display">
      {regions.first}
    </div>
    <div className="second-region region-display">
      {regions.second}
    </div>
  </React.Fragment>
)

export default Layout2080;
