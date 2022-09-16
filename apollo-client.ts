import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://intersection.stellate.sh',
  cache: new InMemoryCache(),
});

export default client;
