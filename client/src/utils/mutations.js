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

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!, $siteLanguage: String!, $spokenLanguage: String!, $isCaller: Boolean!, $category: String, $rating: String ) {
    addUser(name: $name, email: $email, password: $password, siteLanguage: $siteLanguage, spokenLanguage: $spokenLanguage, isCaller: $isCaller, category: $category, rating: $rating ) {
      token
      user {
        _id
        name
        email
        password
        siteLanguage
        spokenLanguage
        isCaller
        category
        rating
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addUser($taskTitle: String!, $callLanguage: String!, $description: String!, $callCategory: String, $payment: String!, $callTime: String, $phoneNumberToCall: String!) {
    addUser(taskTitle: $taskTitle, callLanguage: $callLanguage, description: $description, callCategory: $callCategory, payment: $payment, callTime: $callTime, phoneNumberToCall: $phoneNumberToCall) {
      token
      post {
        _id
        taskTitle
        callLanguage
        description
        callCategory
        payment
        callTime
        phoneNumberToCall
    
      }
    }
  }
`;
