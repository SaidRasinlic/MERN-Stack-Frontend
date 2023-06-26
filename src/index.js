import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import App from './App';
import store from './app/store';
import './assets/style/index.css';

if (process.env.NODE_ENV === 'production') disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
