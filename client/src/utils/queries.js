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
        name
      }
      caller {
        name
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
      postUser {
        name
        _id
      }
    }
  }`;

export const GET_USER = gql`
query User($userId: ID!) {
    user(userId: $userId) {
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
  }`;