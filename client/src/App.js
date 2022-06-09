import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import SignupForm from './components/SignupForm'


import './homepg.css';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});


// landing page

// login/sign up

// dashboard for caller full of posts

// if noncaller - create new post option and posts already created

// comments 


class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    
                    <HomePage />

                </Router>
            </ApolloProvider>
        );
    }
}

export default App;



