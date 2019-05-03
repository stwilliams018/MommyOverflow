import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="field">
      <input className="input" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="field">
      <textarea className="textarea" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="button is-link">
      {props.children}
    </button>
  );
}
