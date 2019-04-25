import React, { Component } from 'react';

function handleSubmit() {
    console.log("submitworked");
}

function handleClose() {
    console.log("closeworks");
}

class CommentModal extends Component {


    render() {
        return (
            <div className="modal">
              <div className="modal-background"></div>
              <div className="modal-content">
                <div className="field">
                  <label className="label">Please enter your comment</label>
                  <div className="control">
                    <textarea className="textarea" id="commentText" placeholder="Textarea"></textarea>
                  </div>
                  <button className="button" onClick={handleSubmit}>Submit</button>
                  <button className="button" onClick={handleClose}>Cancel</button>
                </div>
              </div>
            </div>
          );
    };

}

export default CommentModal;