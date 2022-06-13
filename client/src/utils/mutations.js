import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;



export const ADD_POST = gql`
  mutation addPost($taskTitle: String!, $callLanguage: String!, $description: String!, $callCategory: String, $payment: String!, $callTime: String!, $phoneNumberToCall: String!, $postUser: String!) {
    addPost(taskTitle: $taskTitle, callLanguage: $callLanguage, description: $description, callCategory: $callCategory, payment: $payment, callTime: $callTime, phoneNumberToCall: $phoneNumberToCall, postUser: $postUser ) {
        _id
        taskTitle
        callLanguage
        description
        callCategory
        payment
        callTime
        phoneNumberToCall
       postUser{
        _id
       }

      
    }
  }
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!, $siteLanguage: String, $spokenLanguage: String!, $isCaller: Boolean!) {
  addUser(username: $username, email: $email, password: $password, siteLanguage: $siteLanguage, spokenLanguage: $spokenLanguage, isCaller: $isCaller) {
       user {
        _id
        username
        email
        password
        siteLanguage
        spokenLanguage
        isCaller
      }
      token
  }
}`;


export const ADD_COMMENT = gql`
mutation AddComment($postId: String!, $commentText: String!, $commentAuthor: String!) {
  addComment(postId: $postId, commentText: $commentText, commentAuthor: $commentAuthor) {
    comments {
      commentAuthor {
        _id
      }
    }
  }
}`;

export const DELETE_POST = gql`
mutation DeletePost($postId: String!) {
  deletePost(postId: $postId) {
   _id
  }
}`;

export const TOGGLE_COMPLETE = gql`
mutation Mutation($postId: ID!) {
  markAsCompleted(postId: $postId) {
    _id
  }
}`;





