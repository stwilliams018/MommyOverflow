import React, { Component } from "react";
import QuestionModal from "../components/QuestionModal";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
        
        const mapStateToProps = state => ({
          auth: state.auth
        });
        
        this.loadQuestions();
      }
      
      loadQuestions = () => {
        const { user } = this.props.auth;
        
        API.getUserQuestions(user.id)
      .then(res => this.setState({ questions: res.data }))
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
        if (this.state.title && this.props.auth.user.id) {
          API.saveQuestion({
            title: this.state.title,
            user: this.props.auth.user.id,
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
      console.log(this.props.auth.user);
        return (
          <Container fluid>
            <Row>
                <p><br /><br /><br /><h1 className="has-text-centered">Your Profile</h1><br /><br /></p>
                <form className="container">
                <div className="columns is-centered">
                <div className="column is-half">
                <div className="card">
  
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
        </figure>
      </div>
      <div className="media-content media-content-top">
        <p className="title is-4">{this.props.auth.user.name}</p>
        <p className="subtitle is-6">{this.props.auth.user.email}</p>
      </div>
    </div>
  </div>
</div><br /><br />
                  <h1>Questions On My List</h1>
                {this.state.questions.length ? (
                  <List>
                    {this.state.questions.map(question => (
                      <ListItem className="tbody" key={question._id}>
                        <Link  to={"/questions/" + question._id}>
                          <h3><strong>{question.title}</strong></h3></Link>
                          <p>{question.content}</p>
                          <br />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
                </div>
                <div className="column is-half">
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                  />
                  <TextArea
                    value={this.state.content}
                    onChange={this.handleInputChange}
                    name="content"
                    placeholder="Synopsis (Optional)"
                  />
                  <FormBtn
                    disabled={!(this.state.content && this.state.title)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Question
                  </FormBtn>
                </div>
                </div>
                </form>
            </Row>
          </Container>
        );
      }
}

ProfilePage.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(ProfilePage);