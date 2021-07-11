import React, { useState, createRef } from 'react';
import './index.scss';

import Apocalypse_Tourist from '../Icons/Apocalypse_Tourist';
import Barn from '../Icons/Barn';
import BloodLike from '../Icons/BloodLike';

const Slots = () => {
  const episodeData = [
    {
      title: "Sonnie's Edge",
      description:
        "In the underground world of 'beastie' fights, Sonnie is unbeatable -- as long as she keeps her edge.",
      icons: ['apocalypse_tourist', 'barn', 'blood_like'],
    },
    {
      title: "Sonnie's Edge2",
      description:
        "In the underground world of 'beastie' fights, Sonnie is unbeatable -- as long as she keeps her edge.",
      icons: ['barn', 'apocalypse_tourist', 'blood_like'],
    },
    {
      title: "Sonnie's Edge3",
      description:
        "In the underground world of 'beastie' fights, Sonnie is unbeatable -- as long as she keeps her edge.",
      icons: ['blood_like', 'barn', 'apocalypse_tourist'],
    },
  ];

  //   const icons = ['🍒', '🍉', '🍊', '🍓', '🍇', '🥝'];
  const icons = [
    <Barn height={200} width={200} />,
    <Apocalypse_Tourist height={200} width={200} />,
    <BloodLike height={200} width={200} />,
  ];
  //   const [slots, setSlots] = useState({
  //     fruit1: '🍒',
  //     fruit2: '🍒',
  //     fruit3: '🍒',
  //   });
  const [isRolling, setIsRolling] = useState(false);
  const slotRefs = [createRef(), createRef(), createRef()];

  // to trigger rolling and maintain state
  const roll = () => {
    setIsRolling(true);

    let randomEpisodeIndex = Math.floor(Math.random() * episodeData.length);

    setTimeout(() => {
      setIsRolling(false);
    }, 700);

    // Loop through slot refs and set each one to spin
    slotRefs.forEach((slot, i) => {
      // Spin current slot
      triggerSlotRotation2(slot.current, i, randomEpisodeIndex);
      //   triggerSlotRotation(slot.current);
      //   const updatedIcon = triggerSlotRotation(slot.current);
      // Set current slot object ref
      //   const selectedIcon = `fruit${i + 1}`;
      // Set slots with spinning slot
      //   setSlots({ ...slots, [selectedIcon]: updatedIcon });
    });
  };

  // Create a rolling effect and return random selected option
  const triggerSlotRotation = (ref) => {
    const setTop = (top) => {
      ref.style.top = `${top}px`;
    };
    let options = ref.children;
    let randomOptionIndex = Math.floor(Math.random() * icons.length);
    let choosenOption = options[randomOptionIndex];
    // Rotates slots
    setTop(-choosenOption.offsetTop + 2);
    return icons[randomOptionIndex];
  };

  const triggerSlotRotation2 = (ref, index, randomEpisodeIndex) => {
    const setTop = (top) => {
      ref.style.top = `${top}px`;
    };

    let options = ref.children;

    let iconToChangeTo = episodeData[randomEpisodeIndex].icons[index];
    console.log(episodeData[randomEpisodeIndex].title);
    let chosenOptionIndex;

    for (let i = 0; i < options.length; i += 1) {
      if (
        options[i].firstChild.firstElementChild.dataset.name === iconToChangeTo
      ) {
        chosenOptionIndex = i;
      }
    }

    // debugger;

    let choosenOption = options[chosenOptionIndex];
    // Rotates slots
    setTop(-choosenOption.offsetTop + 2);
    // return icons[randomOptionIndex];
  };

  return (
    <div className='slots'>
      <div className='slot'>
        <section>
          <div className='container' ref={slotRefs[0]}>
            {icons.map((icon, i) => (
              <div key={i}>
                <span>{icon}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className='slot'>
        <section>
          <div className='container' ref={slotRefs[1]}>
            {icons.map((icon) => (
              <div>
                <span>{icon}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className='slot'>
        <section>
          <div className='container' ref={slotRefs[2]}>
            {icons.map((icon) => (
              <div>
                <span>{icon}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div
        className={`${!isRolling ? 'roll-btn roll-btn--to-roll' : 'roll-btn'}`}
        onClick={roll}
        disabled={isRolling}
      >
        Roll
      </div>
    </div>
  );
};

export default Slots;
