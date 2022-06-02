import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';



const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});




// landing page

// login/sign up

// dashboard for caller full of posts

// if noncaller - create new post option and posts already created

// comments 


function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="flex-column justify-flex-start min-100-vh">
                    <Header />
                    <div className="container">


                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;



