import React, { useState, createRef } from 'react';
import './index.css';
import './index.scss';

const Slots = () => {
  const fruits = ['🍒', '🍉', '🍊', '🍓', '🍇', '🥝'];
  const [slots, setSlots] = useState({
    fruit1: '🍒',
    fruit2: '🍒',
    fruit3: '🍒',
  });
  const [isRolling, setIsRolling] = useState(false);
  const slotRefs = [createRef(), createRef(), createRef()];

  // to trigger rolling and maintain state
  const roll = () => {
    setIsRolling(true);

    setTimeout(() => {
      setIsRolling(false);
    }, 700);

    // Loop through slot refs and set each one to spin
    slotRefs.forEach((slot, i) => {
      // Spin current slot
      const rolling = triggerSlotRotation(slot.current);
      // Set current slot object ref
      const selectedFruit = `fruit${i + 1}`;
      // Set slots with spinning slot
      setSlots({ ...slots, [selectedFruit]: rolling });
    });
  };

  // Create a rolling effect and return random selected option
  const triggerSlotRotation = (ref) => {
    const setTop = (top) => {
      ref.style.top = `${top}px`;
    };
    let options = ref.children;
    let randomOption = Math.floor(Math.random() * fruits.length);
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return fruits[randomOption];
  };

  return (
    <div className='slots'>
      <div className='slot'>
        <section>
          <div className='container' ref={slotRefs[0]}>
            {fruits.map((fruit, i) => (
              <div key={i}>
                <span>{fruit}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className='slot'>
        <section>
          <div className='container' ref={slotRefs[1]}>
            {fruits.map((fruit) => (
              <div>
                <span>{fruit}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className='slot'>
        <section>
          <div className='container' ref={slotRefs[2]}>
            {fruits.map((fruit) => (
              <div>
                <span>{fruit}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* <div
        className={!isRolling ? 'roll rolling' : 'roll'}
        onClick={!isRolling && roll}
        disabled={isRolling}
      >
        {isRolling ? 'Rolling...' : 'ROLL'}
      </div> */}
      <div
        className={`${!isRolling ? 'roll-btn roll-btn--to-roll' : 'roll-btn'}`}
        onClick={!isRolling && roll}
        disabled={isRolling}
      >
        Roll
      </div>
    </div>
  );
};

export default Slots;
