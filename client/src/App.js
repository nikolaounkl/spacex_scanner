import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from 'react-router-dom';
import Launches from "./components/Launches";
import "./App.css";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
});

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <div className="App container">
                    <h2 className="is-size-4">space<span className="x">X</span>scanner</h2>
                   <Route exact path="/" component={Launches} />
                </div>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
