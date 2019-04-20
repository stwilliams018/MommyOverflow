import React, {Component } from 'react';
import AuthContext from '../context/auth-context';

class QuestionsPage extends Component {

    state = {
        questions:[]
    }

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.title= React.createRef();
        this.description = React.createRef();
        this.category = React.createRef();
        this.date = React.createRef();
    }

    componentDidMount() {
        this.fetchQuestions();
      }

    submitQuestionHandler = () => {
        const title = this.title.current.value;
        const description = this.description.current.value;
        const category = this.category.current.value;
        const date = new Date();
        console.log(date);
        if (
          title.trim().length === 0 ||
          category.trim().length === 0 ||
            description.trim().length === 0
          ) {
            return;
          }
      
          const question = { title, category, description, date };
          console.log(question);
      
          const requestBody = {
            query: `
                mutation {
                  createQuestion(questionInput: {title: "${title}", description: "${description}", category: "${category}", date: "${date}"}) {
                    _id
                    title
                    description
                    date
                    category
                    creator {
                      _id
                      email
                    }
                  }
                }
              `
          };
      
          const token = this.context.token;
      
          fetch('http://localhost:5000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token
            }
          })
            .then(res => {
              if (res.status !== 200 && res.status !== 201) {
                throw new Error('Failed!');
              }
              return res.json();
            })
            .then(resData => {
              this.fetchQuestions();
            })
            .catch(err => {
              console.log(err);
            });
        };

        fetchQuestions() {
            const requestBody = {
              query: `
                  query {
                    questions {
                      _id
                      title
                      description
                      date
                      category
                      creator {
                        _id
                        email
                      }
                    }
                  }
                `
            };
        
            fetch('http://localhost:5000/graphql', {
              method: 'POST',
              body: JSON.stringify(requestBody),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                  throw new Error('Failed!');
                }
                return res.json();
              })
              .then(resData => {
                const questions = resData.data.questions;
                this.setState({ questions: questions });
              })
              .catch(err => {
                console.log(err);
              });
          }
    
    render() {
        const questionList = this.state.questions.map(question => {
            return <li key={question._id} className="questions__list-item">{question.title}</li>;
        });
        return (
            <div className="container">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                  <div className="card-body">
                    <h5 className="card-title text-center">Ask a Question</h5>
                    <form onSubmit={this.submitHandler}>
                      <div className="form-label-group">
                      <label htmlFor="title">Title</label>
                      <input type="text" className="form-control" id="title" ref={this.title} />
                      </div>
                      <div className="form-label-group">
                      <label htmlFor="description">Description</label>
                      <textarea type="text" className="form-control" id="description" rows="4" ref={this.description}></textarea>
                      </div>
                      <div className="form-label-group">
                      <label htmlFor="category">Category</label>
                      <input type="text" className="form-control" id="category" ref={this.category} />
                      </div>
                    </form>
                    {this.context.token && (
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.submitQuestionHandler}>Submit</button>
                    )}
                  </div>
                  </div>
                </div>
                <div>
                    <ul className="questions__list">{questionList}
                    </ul>
                </div>
              </div>
            </div>
            );
    }
}

export default QuestionsPage;