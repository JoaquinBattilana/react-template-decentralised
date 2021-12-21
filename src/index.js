import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import NetworkContextProvider from './context/network';

ReactDOM.render(
  <BrowserRouter>
    <NetworkContextProvider>
      <App />
    </NetworkContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

