import React, { Component } from "react";
import QuestionModal from "../components/QuestionModal";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class ProfilePage extends Component {
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

      deleteQuestion = id => {
        API.deleteQuestion(id)
          .then(res => this.loadQuestions())
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

    handleEvent() {
        return(
            <QuestionModal/>
        )
    }

    render() {
        return (
          <Container fluid>
            <Row>
                <Jumbotron>
                  <h1>Do You Have A New Question?</h1>
                </Jumbotron>
                <form className="container">
                <div className="columns is-centered">
                <div className="column is-half">
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                  />
                  <Input
                    value={this.state.user}
                    onChange={this.handleInputChange}
                    name="user"
                    placeholder="User (required)"
                  />
                  <TextArea
                    value={this.state.content}
                    onChange={this.handleInputChange}
                    name="content"
                    placeholder="Synopsis (Optional)"
                  />
                  <FormBtn
                    disabled={!(this.state.user && this.state.title)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Question
                  </FormBtn>
                </div>
                </div>
                </form>
              <Col size="md-6 sm-12">
                <Jumbotron>
                  <h1>Questions On My List</h1>
                </Jumbotron>
                {this.state.questions.length ? (
                  <List>
                    {this.state.questions.map(question => (
                      <ListItem key={question._id}>
                        <Link to={"/questions/" + question._id}>
                          <strong>
                            {question.title} by {question.user}
                          </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteQuestion(question._id)} />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
          </Container>
        );
      }
}

export default ProfilePage;