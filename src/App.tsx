import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';
import { Router } from './router';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
