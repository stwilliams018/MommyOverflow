import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Header from "../components/images/header.jpg";
import Moment from 'moment';

class Questions extends Component {
  state = {
    questions: [],
    title: "",
    user: "",
    content: ""
  };

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions = () => {
    API.getQuestions()
      .then(res =>
        this.setState({ questions: res.data, title: "", user: "", content: "" })
      )
      .catch(err => console.log(err));
  };

  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.user) {
      API.saveQuestion({
        title: this.state.title,
        user: this.state.user,
        content: this.state.content
      })
        .then(res => this.loadQuestions())
        .catch(err => console.log(err));
    }
  };
  

  render() {
    return (
     <div>
     <section className="hero is-info is-medium is-bold">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title has-text-black-bis">Welcome to Mommy Overflow! <br />Check out some Questions for New Mommys'</h1>
            </div>
        </div>
    </section>


    <div className="container">
        <section className="articles">
            <div className="column is-8 is-offset-2">

            {this.state.questions.length ? (
              
              <List>
                {this.state.questions.map(question => (
                  <ListItem key={question._id}>
                  <div className="card article">
                  <div className="card-content">
                      <div className="media">
                          <div className="media-center">
                              <img src={Header} className="author-image" alt="image"/>
                          </div>
                          <div className="media-content has-text-centered">
                              <p className="title article-title">
                              <Link to={"/questions/" + question._id}>
                      <strong>
                        {question.title}
                      </strong>
                    </Link>
                              </p>
                              <p className="subtitle is-6 article-subtitle">
                                  <a href="#">@{question.user}</a> on {Moment(question.date).format('MMM d, YYYY')}
                              </p>
                          </div>
                      </div>
                      <div className="content article-body">
                          <p>
                          {question.content}
                          </p>
                      </div>
                  </div>
                  
                  </div>
                  </ListItem>
                  
                ))}                
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
                    </div>
        </section>
        </div>
        </div>
        );
  }
}

export default Questions;
