import React from "react";

export function Input(props) {
  return (
    <div className="field">
      <input className="input" {...props} />
    </div>
  );
}
