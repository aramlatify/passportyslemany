import React from "react";


const ButtonTile = (props) => (
  <>
  <div>
  <button type="button" onClick={props.onClick} className="btn">
    <span className="circle">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text"> سڕینەوە</span>
  </button>
  </div>
  </>
);

export default ButtonTile;

