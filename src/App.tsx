import React from 'react';
import './App.css';
import UserCard from 'components/UserCard';
import HomePage from 'pages/HomePage';
import { ApolloProvider } from '@apollo/react-hooks';
import {client} from 'modules/apollo/apolloClient/client'
import RoutesContainer from 'routes/RouteContainer';

const id = "5d57a6b79937b200125cdefd"

const App: React.FC = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <RoutesContainer/>
      </ApolloProvider>
    </div>
  );
}

export default App;
