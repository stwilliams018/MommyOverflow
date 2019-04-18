import React from "react";
import "./style.css";

function Comment(props) {
    return (
        <div class="container" id="app">

            <div class="commentmodal">
                <div class="modal-background"></div>
            <div class="modal-content">
                <div class="field">
                    <label class="label">Enter comment for question posted</label>
                <div class="control">
                    <textarea class="textarea" id ="commentText" placeholder="Textarea"></textarea>
                </div>
                <button class="button is-medium" id="submitComment">Submit</button>
                </div>
            </div>
                <button class="commentmodal-close"></button>
            </div>
        </div>
 
    );
}

export default Comment

$("#showModal").click(function() {
    $(".commentmodal").addClass("is-active");  
  });
  
  $(".commentmodal-close").click(function() {
     $(".commentmodal").removeClass("is-active");
  });

 // "<button class="button" id="showCommentModal">Comment</button>"