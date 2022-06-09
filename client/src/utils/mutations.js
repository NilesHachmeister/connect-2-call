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
    postUser
      
    }
  }
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!, $siteLanguage: String!, $spokenLanguage: String!, $isCaller: Boolean!) {
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
mutation AddComment($commentAuthor: String!, $commentText: String!, $postId: String!) {
  addComment(commentAuthor: $commentAuthor, commentText: $commentText, postId: $postId) {
    comments {
      commentText
      commentAuthor
      createdAt
    }
  }
}`;

export const DELETE_POST = gql`
mutation DeletePost($postId: String!) {
  deletePost(postId: $postId) {
   _id
  }
}`;



