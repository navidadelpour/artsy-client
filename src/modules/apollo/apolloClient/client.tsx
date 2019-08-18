import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context'
import {TOKEN, ID} from 'modules/apollo/apolloClient/TOKEN'
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

const uri = "https://metaphysics-production.artsy.net/"

const httpLink = createHttpLink({
  uri
})

const authLink = setContext((_, { headers }) => {
  return {
      headers: {
          ...headers,
          "x-access-token": TOKEN,
          "x-user-id": ID
      }
  }
})


const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({fragmentMatcher}),
})