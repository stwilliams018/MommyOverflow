import React from "react";
import "./style.css";

function Question(props) {
    return (
        <div class="container" id="app">

            <div class="questionmodal">
                <div class="modal-background"></div>
            <div class="modal-content">
                <div class="field">
                    <label class="label">PLease enter your question</label>
                <div class="control">
                    <textarea class="textarea" id ="questionText" placeholder="Textarea"></textarea>
                </div>
                <button class="button" id="submitQuestion">Submit</button>
                </div>
            </div>
                <button class="questionmodal-close"></button>
            </div>
        </div>
    );
}

export default Question


$("#showQuestionModal").click(function() {
    $(".questionmodal").addClass("is-active");  
  });
  
  $(".questionmodal-close").click(function() {
     $(".questionmodal").removeClass("is-active");
  });

   // "<button class="button" id="showQuestionModal">Comment</button>"