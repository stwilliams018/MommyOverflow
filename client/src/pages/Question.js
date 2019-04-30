import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { TextArea, FormBtn } from "../components/Form";

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
            user: '5cc46c338e14eb414a68cef0',
            question: this.state.question._id,
          })
            .then(res => this.loadAnswers())
            .catch(err => console.log(err));
      };
  

  render() {
    return (
      <Container fluid>
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
              <h1>QUESTION:</h1>
              <p>
                {this.state.question.content}
              </p>
            </article>
            {this.state.answers.length ? (
              
              <div>
                {this.state.answers.map(answer => (
                  <div key={answer._id}>
                  <div className="card-content">
                      <div className="media">
                          <div className="media-center">
                              <img src="http://www.radfaces.com/images/avatars/angela-chase.jpg" className="author-image" alt="Placeholder image" />
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
              <h3>No Results to Display</h3>
            )}
            <form>
              
              <TextArea
                value={this.state.answer}
                onChange={this.handleInputChange}
                name="answer"
                placeholder="Ask your question"
              />
              <FormBtn
                disabled={!(this.state.answer)}
                onClick={this.handleAnswerSubmit}
              >
                Submit Question
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Question;
