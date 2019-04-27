import React, { Component } from 'react';
import CommentModal from "../components/CommentModal";


class HomePage extends Component {

  state = {
    isOpen: true
  };

  constructor(props) {
    super(props);
    
  }

  handleEvent(){

    return(
      <CommentModal/>
    );
    
  }

  render() {


    return (

      <section className="section">

      <div className="container">

        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </div>
          <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>

        </div>
        <div className="buttons">
          <div className="showCommentModal">
            <button className="button is-success" onClick={this.handleEvent}>
              <strong>Add Comment</strong>
            </button>
          </div>
        </div>
        <div className="content">
          Comments Here
                <br />
          <br />
        </div>
      </div>

      </section>
    );
  }
}


export default HomePage;

