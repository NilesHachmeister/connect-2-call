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
mutation AddUser($name: String!, $email: String!, $password: String!, $siteLanguage: String!, $spokenLanguage: String!, $isCaller: Boolean!) {
  addUser(name: $name, email: $email, password: $password, siteLanguage: $siteLanguage, spokenLanguage: $spokenLanguage, isCaller: $isCaller) {
       user {
        _id
        name
        email
        password
        siteLanguage
        spokenLanguage
        isCaller
        category
      }
      token
  }
}`;