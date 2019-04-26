import React, { Component } from 'react';



class QuestionModal extends Component {

    handleSubmit() {
        console.log("submitworked");
    }
    
    handleClose() {
        console.log("closeworks");
    }


    render() {
        return (
            <div className="modal">
                <div className="modal-close">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="field">
                        <label class="label">Title</label>
                        <div class="control">
                            <input class="input" type="Question Title" placeholder="Text input" />
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
                    <button className="button" onClick={this.handleSubmit}>Submit</button>
                    <button className="button" onClick={this.handleClose}>Cancel</button>
                </div>
                </div>
            </div>
        )
    }


}

export default QuestionModal;