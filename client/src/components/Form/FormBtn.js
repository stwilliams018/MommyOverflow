import React from "react";

export function FormBtn(props) {
  return (
    <div className="field is-grouped">
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="button is-link">
        {props.children}
      </button>
    </div>
  );
}
