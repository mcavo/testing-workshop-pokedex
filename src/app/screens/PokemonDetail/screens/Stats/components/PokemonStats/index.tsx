import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { IPokemonStat } from '@interfaces/reduxInterfaces';

import BaseStat from './components/BaseStat';

interface Props {
  stats: Array<IPokemonStat>;
}

function PokemonStats({ stats }: Props) {
  const [animationProgress, setAnimationProgress] = useState(0);
  const animation = useRef(new Animated.Value(0));
  useEffect(() => {
    animation.current.addListener(({ value }) => setAnimationProgress(value));
    Animated.decay(animation.current, {
      velocity: 30,
      useNativeDriver: false
    }).start();
    Animated.timing(animation.current, {
      toValue: 100,
      duration: 800,
      useNativeDriver: false,
      easing: Easing.exp
    }).start();
  }, [animation]);

  return (
    <>
      {stats.map(({ stat: { name }, baseStat }: IPokemonStat) => (
        <BaseStat key={name} label={name} value={baseStat} animationProgress={animationProgress} />
      ))}
    </>
  );
}

export default PokemonStats;
