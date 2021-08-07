import React, { useState, createRef, useEffect } from 'react';
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
// Episode data
import { episodeData } from '../../episodeData';

import AllEpisodes from '../../Pages/AllEpisodes';

// Icon components
import CyclopticPyramid from '../Icons/CyclopticPyramid';
import Barn from '../Icons/Barn';
import ThumbsUp from '../Icons/ThumbsUp';
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
import Horseshoe from '../Icons/Horseshoe';
import HumanHeart from '../Icons/HumanHeart';
import Square from '../Icons/Square';
import Imp from '../Icons/Imp';
import SkullAndCrossbones from '../Icons/SkullAndCrossbones';
import PlugSocket from '../Icons/PlugSocket';
import IceCube from '../Icons/IceCube';
import MushroomCloud from '../Icons/MushroomCloud';
import Clock from '../Icons/Clock';
import Star from '../Icons/Star';

const Slots = (props) => {
  const history = useHistory();
  const [allEpisodes, setAllEpisodes] = useState();

  useEffect(() => {
    setAllEpisodes(episodeData);
  }, []);

  const icons = [
    // <QuestionMark />,
    <X2 height={200} width={200} />,
    <Heart height={200} width={200} />,
    <Barn height={200} width={200} />,
    <CyclopticPyramid height={200} width={200} />,
    <ThumbsUp height={200} width={200} />,
    <Snake height={200} width={200} />,
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
    <Horseshoe />,
    <HumanHeart />,
    <Square />,
    <Imp />,
    <SkullAndCrossbones />,
    <PlugSocket />,
    <IceCube />,
    <MushroomCloud />,
    <Clock />,
    <Star />,
  ];
  //   const [isRolling, setIsRolling] = useState(false);
  const [previousRandomEpisodeIndex, setPreviousRandomEpisodeIndex] =
    useState();
  const slotRefs = [createRef(), createRef(), createRef()];

  const rollHandler = (forcedEpisodeNumber) => {
    props.setEpisodesGenerated((prev) => prev + 1);
    props.setIsRolling(true);
    props.setCurrentEpisode();
    let randomEpisodeIndex;

    // Calculate random index until it's different from the previous pick
    const calculateRandomEpisodeIndex = () => {
      randomEpisodeIndex = Math.floor(Math.random() * allEpisodes.length);
    };

    calculateRandomEpisodeIndex();

    while (randomEpisodeIndex === previousRandomEpisodeIndex) {
      calculateRandomEpisodeIndex();
    }

    // Make index to change to the forced episode number if one is present
    if (typeof forcedEpisodeNumber !== 'object')
      randomEpisodeIndex = forcedEpisodeNumber;

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
    let iconToChangeTo = allEpisodes[randomEpisodeIndex].icons[index];
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
      setPreviousRandomEpisodeIndex(randomEpisodeIndex);
      props.setIsEpisodeGenerated(false);
      props.setIsFirstRollCompleted(true);
      //   props.setIsRolling(false);
      props.setCurrentEpisode(
        allEpisodes.filter(
          (episode) => episode.title === allEpisodes[randomEpisodeIndex].title
        )[0]
      );
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

    const episodeToGoTo = allEpisodes[randomEpisodeIndex].title;

    setTimeout(() => {
      props.setIsRolling(false);
    }, 4000);
  };

  return (
    <div className={`slots ${props.isTablet ? 'slots--tablet' : ''}`}>
      {props.areAllEpisodesVisible === true && (
        <AllEpisodes
          areAllEpisodesVisible={props.areAllEpisodesVisible}
          setAreAllEpisodesVisible={props.setAreAllEpisodesVisible}
          setCurrentEpisode={props.setCurrentEpisode}
          rollHandler={rollHandler}
        />
      )}
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
      <StyledSlotsCta
        className={`slots-cta ${props.isTablet ? 'slots-cta--tablet' : ''}`}
        variants={fadeOut(0)}
        initial='hidden'
        animate={props.isRolling ? 'show' : ''}
        exit='exit'
      >
        <div
          className={`btn ${
            props.episodesGenerated === 0 ? 'btn--homepage' : ''
          } ${props.episodesGenerated > 0 ? 'btn--trans-white' : ''}`}
          onClick={rollHandler}
          disabled={props.isRolling}
        >
          Random
        </div>
        <div
          className={`btn ${
            props.episodesGenerated === 0 ? 'btn--homepage' : ''
          } ${props.episodesGenerated > 0 ? 'btn--trans-white' : ''}`}
          onClick={() =>
            props.setAreAllEpisodesVisible(!props.areAllEpisodesVisible)
          }
        >
          All episodes
        </div>
      </StyledSlotsCta>
    </div>
  );
};

const StyledSlotsMain = styled(motion.div)``;
const StyledSlotsCta = styled(motion.div)``;

export default Slots;
