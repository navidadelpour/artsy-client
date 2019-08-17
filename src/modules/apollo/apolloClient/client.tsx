import ApolloClient from 'apollo-boost';

const uri = "https://metaphysics-production.artsy.net/"

export const client = new ApolloClient({
  uri: uri,
});

// export default client