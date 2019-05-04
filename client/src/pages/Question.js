import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { TextArea, FormBtn } from "../components/Form";
import Header from "../components/images/header.jpg";

class Question extends Component {
  state = {
    answers:[],
    answer: "",
    user: "",
    question: ""
  };
  // When this component mounts, grab the question with the _id of this.props.match.params.id
  // e.g. localhost:3000/questions/599dcb67f0f16317844583fc
  componentDidMount() {
    const mapStateToProps = state => ({
      auth: state.auth
    });
    API.getQuestion(this.props.match.params.id)
      .then(res => this.setState({ question: res.data }))
      .catch(err => console.log(err));
      API.getAnswers(this.props.match.params.id)
      .then(res => this.setState({ answers: res.data }))
      .catch(err => console.log(err));
  }

  loadAnswers = () => {
    API.getAnswers(this.props.match.params.id)
      .then(res =>
        this.setState({ answers: res.data })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleAnswerSubmit = event => {
        event.preventDefault();
          API.saveAnswer({
            answer: this.state.answer,
            user: this.props.auth.user.id,
            question: this.state.question._id,
          })
            .then(res => this.loadAnswers())
            .catch(err => console.log(err));
      };
  

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.question.title} by {this.state.question.user}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h2 className="is-size-3"> {this.state.question.title}</h2><br />
              <p>
                {this.state.question.content}
              </p><br />
            </article>
            {this.state.answers.length ? (
              
              <div>
                {this.state.answers.map(answer => (
                  <div key={answer._id}>
                  <div className="card-content">
                      <div className="media">
                          <div className="media-center">
                              <img src={Header} className="author-image" alt="Placeholder image" />
                          </div>
                          <div className="media-content">
                              <p>
                      <strong>
                        {answer.answer}
                      </strong>
                              </p>
                          </div>
                      </div>
                  </div>
                  
                  </div>
                  
                ))}
                
              </div>
            ) : (
              <h3 className="is-size-4">No Results to Display</h3>
            )}
           <form className="container">
                <div className="columns is-centered">
                <div className="column is-half">
              
              <TextArea
                value={this.state.answer}
                onChange={this.handleInputChange}
                name="answer"
                placeholder="Type your answer"
              />
              <FormBtn
                disabled={!(this.state.answer)}
                onClick={this.handleAnswerSubmit}
              >
                Submit Comment
              </FormBtn>
              </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

Question.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(Question);
