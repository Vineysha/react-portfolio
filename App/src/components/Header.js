import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1>Vineysha Olivo</h1>
      {props.children}
    </div>
  );
}

export default Header