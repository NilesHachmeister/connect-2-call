import React, { useTransition } from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes
} from "react-router-dom";
import HomePage from './pages/home-page';
import SignupForm from './components/SignupForm'
import Header from './components/Header'
import Footer from './components/Footer'
import Board from './pages/board'
import NewPostForm from './components/NewPostForm';

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

class App extends React.Component {


    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <div>



                        {/* <Routes>
                            <Route path="/signupform">
                                <SignupForm />
                            </Route>
                            <Route path="/board">
                                <Board />
                            </Route>
                            <Route path="/new-post">
                                <NewPostForm />
                            </Route>
                            <Route path="/">
                                <HomePage />
                            </Route>
                        </Routes> */}

                        <Routes>
                            <Route
                                path="/signupform"
                                element={<SignupForm />}
                            />
                            <Route
                                path="/board"
                                element={<Board />}
                            />
                            <Route
                                path="/new-post"
                                element={<NewPostForm />}
                            />
                            <Route
                                path="/"
                                element={<HomePage />}
                            />
                        </Routes>


                        {/* <Switch>
                        <Route
                            path="/signupform"
                            element={<SignupForm />}
                        />
                        <Route
                            path="/board"
                            element={<Board />}
                        />
                        <Route
                            path="/new-post"
                            element={<NewPostForm />}
                        />
                        <Route
                            path="/"
                            element={<HomePage />}
                        />
                    </Switch> */}

                    </div>
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;



