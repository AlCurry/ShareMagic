import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span roll="img" className="delete-btn" {...props} description="delete house">
    ❎
  </span>
);

export default DeleteBtn;
