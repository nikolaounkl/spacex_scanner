import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
});
function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App container">
                space<span className="x">X</span>scanner
            </div>
        </ApolloProvider>
    );
}

export default App;
