import React from "react";

function Dialog({ onClick }) {
  return (
    <>
      <button className="button" onClick={onClick}>
        OPEN DIALOG
      </button>
    </>
  );
}

export default Dialog;
