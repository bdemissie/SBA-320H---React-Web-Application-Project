import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Render the app
ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the app in the Router for routing */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root') // Attach the app to the root element
);
