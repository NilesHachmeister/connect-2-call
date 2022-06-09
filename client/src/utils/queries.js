import { gql } from '@apollo/client';

export const GET_POST = gql`
query Post($postId: ID!) {
    post(postId: $postId) {
      taskTitle
      createdAt
      callLanguage
      description
      callCategory
      payment
      callTime
      phoneNumberToCall
      postUser {
        username
      }
      comments {
          _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }`;

export const GET_POSTS = gql`
query Posts {
    posts {
      _id
      taskTitle
      createdAt
      callLanguage
      description
      callCategory
      payment
      callTime
      phoneNumberToCall
      postUser
      caller
      completed
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
    }
  }`;

export const GET_USER = gql`
query User($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      password
      siteLanguage
      spokenLanguage
      isCaller
      rating
    }
  }`;