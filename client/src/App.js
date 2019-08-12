import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Launches from "./components/Launches";
import LaunchDetails from "./components/LaunchDetails";
import NotFound from "./components/NotFound";
import "./App.css";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
});

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <div className="App">
                    <Navbar />

                    <Switch>
                        <Route path="/" exact component={About} />
                        <Route path="/about" exact component={About} />
                        <Route path="/launches" exact component={Launches} />
                        <Route
                            path="/launch/:flight_number"
                            exact
                            component={LaunchDetails}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
