import React from "react";
import "./style.css";

function Profile (props) {
    return(
        <div>
         <div className = "columns">
            <div className="column"></div>
                <div className = "column">
                    <h2 className="title is-2">Profile Page</h2>
                    <div className="field">
                        <label className="label">Name</label>
                    <div className="control">
                        <input className="input is-black" type="text" placeholder="Text input"/>
                    </div>
                    </div>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-black" type="text" placeholder="Text input" value="bulma"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-black" type="email" placeholder="Email input" value="hello@"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                  <div className="field">
                    <label className="label">Password</label>
                      <p className="control has-icons-left">
                        <input className="input is-black" type="password" placeholder="Password"/>
                        <span className="icon is-small is-left">
                          <i className="fas fa-lock"></i>
                        </span>
                      </p>
                  </div>
                  <div className="file">
                  <label className="label">User Avatar Image</label></br>
                  <label className="file-label">
                    <input className="file-input" type="file" name="resume"/>
                      <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">Choose a file…</span>
                      </span>
                  </label>
                </div>
                </div>
                <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-text">Cancel</button>
                </div>
                </div>
            </div>
          <div className="column"></div>
        </div>
    );
} 

export default Profile ;