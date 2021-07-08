import React, { useState, createRef } from 'react';
import './index.css';

const HomePage = () => {
  const defaultProps = {
    fruits: ['🍒', '🍉', '🍊', '🍓', '🍇', '🥝'],
  };
  const [defaultSlots, setDefaultSlots] = useState({
    fruit1: '🍒',
    fruit2: '🍒',
    fruit3: '🍒',
  });
  const [isRolling, setIsRolling] = useState(false);
  const slotRef = [createRef(), createRef(), createRef()];

  // to trigger roolling and maintain state
  const roll = () => {
    setIsRolling(true);

    setTimeout(() => {
      setIsRolling(false);
    }, 700);

    // looping through all 3 slots to start rolling
    slotRef.forEach((slot, i) => {
      // this will trigger rolling effect
      const selected = triggerSlotRotation(slot.current);
      const selectedFruit = `fruit${i + 1}`;
      setDefaultSlots({ ...defaultSlots, [selectedFruit]: selected });
      //   this.setState({ [`fruit${i + 1}`]: selected });
    });
  };

  // this will create a rolling effect and return random selected option
  const triggerSlotRotation = (ref) => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let options = ref.children;
    let randomOption = Math.floor(Math.random() * defaultProps.fruits.length);
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return defaultProps.fruits[randomOption];
  };

  return (
    <div className='SlotMachine'>
      <div className='slot'>
        <section>
          <div className='container' ref={slotRef[0]}>
            {defaultProps.fruits.map((fruit, i) => (
              <div key={i}>
                <span>{fruit}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className='slot'>
        <section>
          <div className='container' ref={slotRef[1]}>
            {defaultProps.fruits.map((fruit) => (
              <div>
                <span>{fruit}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className='slot'>
        <section>
          <div className='container' ref={slotRef[2]}>
            {defaultProps.fruits.map((fruit) => (
              <div>
                <span>{fruit}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div
        className={!isRolling ? 'roll rolling' : 'roll'}
        onClick={!isRolling && roll}
        disabled={isRolling}
      >
        {isRolling ? 'Rolling...' : 'ROLL'}
      </div>
    </div>
  );
};

export default HomePage;
