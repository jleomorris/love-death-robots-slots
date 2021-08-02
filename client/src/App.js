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
// Components
import Footer from './Components/Footer';
// Hooks
import useWindowSize from './hooks/useWindowSize';
// Device sizes
import { sizeNumber } from './util/device';

const App = () => {
  const location = useLocation();
  const [response, setResponse] = useState({});
  const [currentEpisode, setCurrentEpisode] = useState();
  const { screenWidth } = useWindowSize();

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
            {/* Desktop */}
            {screenWidth > sizeNumber.laptopS && (
              <Header
                currentEpisode={currentEpisode}
                setCurrentEpisode={setCurrentEpisode}
              />
            )}
            {/* Tablet */}
            {screenWidth > sizeNumber.tablet &&
              screenWidth < sizeNumber.laptopS && <p>tablet</p>}
            {/* Mobile */}
            {screenWidth > 0 && screenWidth < sizeNumber.tablet && (
              <p>mobile</p>
            )}
          </Route>
          {/* <Route path={`/:episode`} exact>
            <Header
              currentEpisode={currentEpisode}
              setCurrentEpisode={setCurrentEpisode}
            />
          </Route> */}
        </Switch>
        <Footer />
      </AnimatePresence>
    </div>
  );
};

export default App;
