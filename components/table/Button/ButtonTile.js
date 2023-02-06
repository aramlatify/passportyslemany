import React from "react";


const ButtonTile = (handleClick) => (
  <>
  <div>
  <button type="button" onClick={handleClick} className="btn">
    <span className="circle">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text"> سڕینەوە</span>
  </button>
  </div>
  </>
);

export default ButtonTile;

