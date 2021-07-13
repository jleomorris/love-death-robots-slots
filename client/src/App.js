import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import HomePage from './Pages/Homepage';
import Header from './Components/Header';
import './Global.scss';
// Router
import { Switch, Route, useLocation, BrowserRouter } from 'react-router-dom';
// Animations
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  const [response, setResponse] = useState({});
  const [currentEpisode, setCurrentEpisode] = useState();

  useEffect(() => {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data;
      setResponse(response);
    });
  }, []);

  return (
    <div className='App'>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path={`/`} exact>
            <HomePage
              currentEpisode={currentEpisode}
              setCurrentEpisode={setCurrentEpisode}
            />
          </Route>
          <Route path={`/:episode`} exact>
            <Header
              currentEpisode={currentEpisode}
              setCurrentEpisode={setCurrentEpisode}
            />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
