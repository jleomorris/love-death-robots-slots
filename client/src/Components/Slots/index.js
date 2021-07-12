import React, { useState, createRef } from 'react';
import './index.scss';

// Icon components
import ApocalypseTourist from '../Icons/ApocalypseTourist';
import Barn from '../Icons/Barn';
import BloodLike from '../Icons/BloodLike';
import Heart from '../Icons/Heart';
import Snake from '../Icons/Snake';
import X2 from '../Icons/X2';
import OneEyedRobot from '../Icons/OneEyedRobot';
import SlimeBurger from '../Icons/SlimeBurger';
import Sadomazofembotochist from '../Icons/Sadomazofembotochist';
import SnakeEatSelf from '../Icons/SnakeEatSelf';
import Eye from '../Icons/Eye';

// Episode data
import { episodeData } from '../../episodeData';

const Slots = (props) => {
  const icons = [
    <Barn height={200} width={200} />,
    <ApocalypseTourist height={200} width={200} />,
    <BloodLike height={200} width={200} />,
    <Heart height={200} width={200} />,
    <Snake height={200} width={200} />,
    <X2 height={200} width={200} />,
    <OneEyedRobot height={200} width={200} />,
    <SlimeBurger height={200} width={200} />,
    <Sadomazofembotochist height={200} width={200} />,
    <SnakeEatSelf height={200} width={200} />,
    <Eye height={200} width={200} />,
  ];
  const [isRolling, setIsRolling] = useState(false);
  const [previousRandomEpisodeIndex, setPreviousRandonEpisodeIndex] =
    useState();
  const slotRefs = [createRef(), createRef(), createRef()];

  const roll = () => {
    setIsRolling(true);
    let randomEpisodeIndex;

    // Calculate random index until it's different from the previous pick
    const calculateRandomEpisodeIndex = () => {
      randomEpisodeIndex = Math.floor(Math.random() * episodeData.length);
    };

    calculateRandomEpisodeIndex();

    while (randomEpisodeIndex === previousRandomEpisodeIndex) {
      calculateRandomEpisodeIndex();
    }

    // Loop through slot refs and set each one to spin
    slotRefs.forEach((slot, index) => {
      triggerSlotRotation(slot.current, index, randomEpisodeIndex);
    });
  };

  // Create a rolling effect and return random episode icons
  const triggerSlotRotation = (ref, index, randomEpisodeIndex) => {
    // Function for animating slot rotation
    const setTop = (top) => {
      ref.style.top = `${top}px`;
    };

    // All icon divs
    let options = ref.children;

    // Icon of random episode to change to based on data
    let iconToChangeTo = episodeData[randomEpisodeIndex].icons[index];
    let iconToChangeToIndex;

    // Search through all icon divs and set index of correct icon to change to
    for (let i = 0; i < options.length; i += 1) {
      if (
        options[i].firstChild.firstElementChild.dataset.name === iconToChangeTo
      ) {
        iconToChangeToIndex = i;
      }
    }

    let choosenOption = options[iconToChangeToIndex];
    // Animates slot rotation
    setTop(-choosenOption.offsetTop + 2);

    // Set current episode data for details
    props.setCurrentEpisode(
      episodeData.filter(
        (episode) => episode.title === episodeData[randomEpisodeIndex].title
      )[0]
    );

    setPreviousRandonEpisodeIndex(randomEpisodeIndex);
    setIsRolling(false);
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
