import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';
import { Login } from './page/login/login';

function App() {
  return (
    <ApolloProvider client={client}>
      <Login />
    </ApolloProvider>
  );
}

export default App;
