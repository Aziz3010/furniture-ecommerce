import React from "react";

const Helmet = (props) => {
  document.title = "Multimarket - " + props.title;
  return <>{props.children}</>;
};

export default Helmet;
