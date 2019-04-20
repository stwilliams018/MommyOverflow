import React from 'react';
import {NavLink } from 'react-router-dom';
import './MainNavigation.css';


function mainNavigation() {
  return (
  
    <div>
        <div className="modal">
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="field">
              <label class="label">Title</label>
                <div class="control">
                  <input class="input" type="Question Title" placeholder="Text input"/>
                </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Textarea"></textarea>
                </div>
            </div>
            <div className="field">
              <label className="label">Category</label>
                <div className="control">
                  <div className="select">
                    <select>
                      <option>Select dropdown</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                      <option>Option 6</option>
                    </select>
                  </div>
                </div>
              </div>
                <button className="button" id="submitQuestion">Submit</button>
                <button className="button" id="questionmodal-close">Cancel</button>
            </div>
          </div>
        

        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <h1>MommyOverflow</h1>
            </a>
          </div>
          <div className="navbar-start">
            <div className="navbar-item">
              <div className="buttons">
                <div className="showQuestionModal">
                  <a className="button is-success" id="showQuestionModal">
                    <strong>Add Question</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <a className="navbar-item">
            <NavLink className="nav-link" to="/Auth">Login</NavLink>
            </a>
            <a className="navbar-item">
            <NavLink className="nav-link" to="/Home">Home</NavLink>
            </a>
            <a className="navbar-item">
            <NavLink className="nav-link" to="/Profile">Profile</NavLink>
            </a>
          </div>
      </nav>
    </div>
    
  );
}
  export default mainNavigation ;