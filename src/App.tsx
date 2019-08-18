import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import {client} from 'modules/apollo/apolloClient/client'
import RoutesContainer from 'routes/RouteContainer';

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
