import React from "react";


const ButtonTile = (handleClick) => (
  <>
  <div>
  <button type="button" onClick={handleClick} class="btn">
    <span class="circle">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text"> سڕینەوە</span>
  </button>
  </div>
  </>
);

export default ButtonTile;

