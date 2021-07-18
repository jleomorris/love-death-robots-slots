import React, { useState, createRef } from 'react';
import './index.scss';
import { useHistory, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  slideUp,
  enterRight,
  photoAnimation,
  halfWidth,
  pageAnimation,
  fadeOut,
} from '../../animations';

// Icon components
import CyclopticPyramid from '../Icons/CyclopticPyramid';
import Barn from '../Icons/Barn';
import BloodLike from '../Icons/BloodLike';
import Heart from '../Icons/Heart';
import Snake from '../Icons/Snake';
import X2 from '../Icons/X2';
import OneEyedSkull from '../Icons/OneEyedSkull';
import DrippingHamburger from '../Icons/DrippingHamburger';
import KinkyMask from '../Icons/KinkyMask';
import Ouroboros from '../Icons/Ouroboros';
import Eye from '../Icons/Eye';
import Mug from '../Icons/Mug';
import CowsHead from '../Icons/CowsHead';
import Cat from '../Icons/Cat';
import SplitSkull from '../Icons/SplitSkull';
import MicroscopicBeings from '../Icons/MicroscopicBeings';
import Yogurt from '../Icons/Yogurt';
import Strawberry from '../Icons/Strawberry';
import Penis from '../Icons/Penis';
import SurgeTank from '../Icons/SurgeTank';
import HorrifiedFace from '../Icons/HorrifiedFace';
import Cog from '../Icons/Cog';
import HuliJingHead from '../Icons/HuliJingHead';
import Zippo from '../Icons/Zippo';
import Otto from '../Icons/Otto';
import DogTags from '../Icons/DogTags';
import Moon from '../Icons/Moon';
import Skull2 from '../Icons/Skull2';
import CarFreshener from '../Icons/CarFreshener';
import Hook from '../Icons/Hook';
import Night from '../Icons/Night';
import RoadSign from '../Icons/RoadSign';
import QuestionMark from '../Icons/QuestionMark';
// Episode data
import { episodeData } from '../../episodeData';

const Slots = (props) => {
  const history = useHistory();
  const icons = [
    <QuestionMark />,
    <Barn height={200} width={200} />,
    <CyclopticPyramid height={200} width={200} />,
    <BloodLike height={200} width={200} />,
    <Heart height={200} width={200} />,
    <Snake height={200} width={200} />,
    <X2 height={200} width={200} />,
    <OneEyedSkull height={200} width={200} />,
    <DrippingHamburger height={200} width={200} />,
    <KinkyMask height={200} width={200} />,
    <Ouroboros height={200} width={200} />,
    <Eye height={200} width={200} />,
    <Mug height={200} width={200} />,
    <CowsHead height={200} width={200} />,
    <Cat height={200} width={200} />,
    <SplitSkull height={200} width={200} />,
    <MicroscopicBeings height={200} width={200} />,
    <Yogurt height={200} width={200} />,
    <Strawberry height={200} width={200} />,
    <Penis height={200} width={200} />,
    <SurgeTank />,
    <HorrifiedFace />,
    <Cog />,
    <HuliJingHead />,
    <Zippo />,
    <Otto />,
    <DogTags />,
    <Moon />,
    <Skull2 />,
    <CarFreshener />,
    <Hook />,
    <Night />,
    <RoadSign />,
  ];
  //   const [isRolling, setIsRolling] = useState(false);
  const [previousRandomEpisodeIndex, setPreviousRandomEpisodeIndex] =
    useState();
  const slotRefs = [createRef(), createRef(), createRef()];

  const rollHandler = () => {
    props.setEpisodesGenerated((prev) => prev + 1);
    props.setIsRolling(true);
    props.setCurrentEpisode();
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
    console.log('Slots.iconToChangeTo', iconToChangeTo);
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

    console.log('Slots.isFirstRollCompleted', props.isFirstRollCompleted);

    const setEpisodeData = () => {
      props.setCurrentEpisode(
        episodeData.filter(
          (episode) => episode.title === episodeData[randomEpisodeIndex].title
        )[0]
      );
      setPreviousRandomEpisodeIndex(randomEpisodeIndex);
      props.setIsEpisodeGenerated(false);
      props.setIsFirstRollCompleted(true);
      props.setIsRolling(false);
    };

    // Add delay to detail and background loading if it's first roll
    if (props.isFirstRollCompleted) {
      setEpisodeData();
    } else {
      setTimeout(() => {
        // Set current episode data for details
        setEpisodeData();
      }, 2000);
    }

    const episodeToGoTo = episodeData[randomEpisodeIndex].title;

    // setTimeout(() => {
    //   history.push(episodeToGoTo);
    // }, 1400);
    // history.push(episodeToGoTo);
  };

  return (
    <div
      //   className={`slots ${
      //     props.isFirstRollCompleted ? 'slots--homepage' : 'slots--homepage'
      //   }`}
      className='slots'
    >
      <StyledSlotsMain
        className='styled-slots-main'
        variants={props.episodesGenerated === 1 ? fadeOut(0) : fadeOut(1.5)}
        initial='hidden'
        animate={props.isEpisodeGenerated ? 'show' : ''}
        exit='exit'
      >
        <div className='slots-main'>
          <div
            className={`slot ${
              props.isFirstRollCompleted ? 'slot--homepage' : 'slot--homepage'
            }`}
          >
            <section
              className={`section ${
                props.isFirstRollCompleted
                  ? 'section--homepage'
                  : 'section--homepage'
              }`}
            >
              <div className='container' ref={slotRefs[0]}>
                {icons.map((icon, i) => (
                  <div key={i}>
                    <span
                      className={`icon-container ${
                        props.isFirstRollCompleted
                          ? 'icon-container--homepage'
                          : 'icon-container--homepage'
                      }`}
                    >
                      {icon}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div
            className={`slot ${
              props.isFirstRollCompleted ? 'slot--homepage' : 'slot--homepage'
            }`}
          >
            <section
              className={`section ${
                props.isFirstRollCompleted
                  ? 'section--homepage'
                  : 'section--homepage'
              }`}
            >
              <div className='container' ref={slotRefs[1]}>
                {icons.map((icon) => (
                  <div>
                    <span
                      className={`icon-container ${
                        props.isFirstRollCompleted
                          ? 'icon-container--homepage'
                          : 'icon-container--homepage'
                      }`}
                    >
                      {icon}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div
            className={`slot ${
              props.isFirstRollCompleted ? 'slot--homepage' : 'slot--homepage'
            }`}
          >
            <section
              className={`section ${
                props.isFirstRollCompleted
                  ? 'section--homepage'
                  : 'section--homepage'
              }`}
            >
              <div className='container' ref={slotRefs[2]}>
                {icons.map((icon) => (
                  <div>
                    <span
                      className={`icon-container ${
                        props.isFirstRollCompleted
                          ? 'icon-container--homepage'
                          : 'icon-container--homepage'
                      }`}
                    >
                      {icon}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </StyledSlotsMain>
      <div className='slots-cta'>
        <div
          className={`${
            !props.isRolling ? 'roll-btn roll-btn--to-roll' : 'roll-btn'
          }`}
          onClick={rollHandler}
          disabled={props.isRolling}
        >
          Roll
        </div>
      </div>
    </div>
  );
};

const StyledSlotsMain = styled(motion.div)``;

export default Slots;
