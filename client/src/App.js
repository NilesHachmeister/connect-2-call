import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import NewPostForm from './components/NewPostForm';
import Home from './components/Home';
import MainHomePage from './pages/home-page';

import './homepg.css';
import Testimonials from './components/Testimonials';

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
                    <Routes>

                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/signup"
                            element={<SignupForm />}
                        />
                        <Route
                            path="/new-post"
                            element={<NewPostForm />}
                        />

                    </Routes>

                </Router>
            </ApolloProvider>
        );
    }
}

export default App;



