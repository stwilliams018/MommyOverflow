import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <div>
        <div class="modal">
          <div class="modal-background"></div>
          <div class="modal-content">
            <div class="field">
              <label class="label ">Please enter your question</label>
              <div class="control">
                <textarea class="textarea" id ="questionText" placeholder="Textarea"></textarea>
              </div>
                <button class="button" id="submitQuestion">Submit</button>
                <button class="button" id="questionmodal-close">Cancel</button>
            </div>
          </div>   
        </div>
        <nav class="navbar is-link" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <h1>MommyOverflow</h1>
            </a>
          </div>
          <div class="navbar-start">
            <div class="navbar-item">
              <div class="buttons">
                <div class="showQuestionModal">
                  <a class="button is-success" id="showQuestionModal">
                    <strong>Add Question</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <a class="navbar-item">
              <Link to="/" className={window.location.pathname === "/" ? "navbar-link active" : "navbar-link"}>
                Home
              </Link>
            </a>
            <a class="navbar-item">
              <Link to="/profile" className={window.location.pathname === "/profile" ? "navbar-link active" : "navbar-link"}>
                Profile
              </Link>
            </a>
            <a class="navbar-item">
              <Link to="/login" className={window.location.pathname === "/login" ? "navbar-link active" : "navbar-link"}>
                Login
              </Link>
            </a>
          </div>
        </nav>
      </div>
    );
  }

export default NavBar;

