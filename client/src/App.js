import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

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
      <h1>Here is our new feature!</h1>
      <h1>Fetched data: {response.body}</h1>
    </div>
  );
};

export default App;
