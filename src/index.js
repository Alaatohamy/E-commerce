import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import "./index.css";
import "styles/index.scss";
import App from "./App";
import { store, persistor } from "redux/store";
import { typeDefs, resolvers, initializeCache } from "./graphql";

const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers
});

initializeCache();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
