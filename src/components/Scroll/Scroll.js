import React from "react";
import "./Scroll.css";

const Scroll = (props) => {
    console.log(props);
    return <div className="scrollArea">{props.children}</div>;
};

export default Scroll;
