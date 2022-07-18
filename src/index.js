import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import Aboutus from './Aboutus';
import Gallery from './Gallery';
import Contactus from './Contactus';
import Homepage from './Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/homepage" element={<Homepage />} />

        <Route path="/aboutus" element={<Aboutus />} >
          <Route path="contactus" element={<Contactus />} />
        </Route>


        <Route path="/gallery" element={<Gallery />} />
      </Routes >
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
