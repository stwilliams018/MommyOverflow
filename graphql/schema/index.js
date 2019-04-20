const {buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Answer {
        _id: ID!
        question: Question!
        user: User!
        score: Int!
        answer: String!
        createdAt: String!
        updatedAt: String!
    }
    type Question {
        _id:ID!
        title: String!
        description: String!
        category: String!
        date: String!
        creator: User!        
    }

    type User {
        _id:ID!
        email:String!
        password: String
        createdQuestions: [Question!]
    }

    type AuthData {
        userId:ID!
        token:String!
        tokenExpiration:Int!
    }

    input QuestionInput {
        title: String!
        description: String!
        category: String!
        date: String!
    }

    input UserInput {
        email:String!
        password: String!
    }

    input UpdateUserInput {
        email:String!
    }

    type RootQuery {
        questions:[Question!]!
        answers:[Answer!]!
        login(email:String!,password:String!):AuthData!
    }
    type RootMutation {
        createQuestion(questionInput:QuestionInput):Question
        createUser(userInput:UserInput): User
        updateUser(email:String!): User
        createAnswer(questionId: ID!): Answer!
        cancelAnswer(answerId:ID!):Question!
    }
        schema {
             query: RootQuery
             mutation: RootMutation
        }
    `)