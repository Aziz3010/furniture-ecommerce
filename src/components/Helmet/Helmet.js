import React from "react";
import CommonSection from "../UI/CommonSection";

const Helmet = (props) => {
  document.title = "Multimarket - " + props.title;
  return (
    <>
      <CommonSection title={props.title} />
      {props.children}
    </>
  );
};

export default Helmet;
