import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from "@util/ThemeContext";
import App from './App';

// config apollo client
const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND,
  cache: new InMemoryCache(),
});

// create root element
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// render root element with apollo
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
);