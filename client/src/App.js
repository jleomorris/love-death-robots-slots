import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import HomePage from './Pages/Homepage';
import './Global.scss';
// Animations
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data;
      setResponse(response);
    });
  }, []);

  return (
    <div className='App'>
      <AnimatePresence>
        <HomePage />
      </AnimatePresence>
    </div>
  );
};

export default App;
