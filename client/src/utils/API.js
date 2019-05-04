import axios from "axios";

export default {
  // Gets all questions
  getQuestions: function() {
    return axios.get("/api/questions");
  },
  // Gets the question with the given id
  getQuestion: function(id) {
    return axios.get("/api/questions/" + id);
  },
  getUserQuestions: function(id) {
    return axios.get("/api/questions/user/" + id);
  },
  // Deletes the question with the given id
  deleteQuestion: function(id) {
    return axios.delete("/api/questions/" + id);
  },
  // Saves a question to the database
  saveQuestion: function(questionData) {
    return axios.post("/api/questions", questionData);
  },
  getAnswers: function(id) {
    return axios.get("/api/answers/" + id);
  },
  saveAnswer: function(answerData) {
    return axios.post("/api/answers", answerData);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  loginUser: function(userData) {
    return axios.post("/api/users/login", userData);
  }
};
