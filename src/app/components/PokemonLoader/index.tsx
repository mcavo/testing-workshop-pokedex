import React, { useRef, useEffect } from 'react';
import { View, Animated, Easing, Image } from 'react-native';

import styles from './styles';
import pokeball from './assets/pokeball.png';
import pokeballIllumination from './assets/pokeball_illumination.png';

function PokemonLoader() {
  const rotation = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation.current, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();
  }, [rotation]);

  const spin = rotation.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });
  return (
    <View style={styles.container}>
      <Animated.Image style={[styles.image, { transform: [{ rotate: spin }] }]} source={pokeball} />
      <Image style={styles.image} source={pokeballIllumination} />
    </View>
  );
}

export default PokemonLoader;
