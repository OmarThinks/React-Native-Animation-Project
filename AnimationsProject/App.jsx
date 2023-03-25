import {View, Text, Animated, Button} from 'react-native';
import React from 'react';

const App = () => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const handlePress = async () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  console.log(animatedValue);

  return (
    <View>
      <Animated.View
        style={{
          backgroundColor: 'red',
          //width: animatedValue,
          //height: animatedValue,
          width: 100,
          height: 100,
          opacity: animatedValue,
        }}
      />

      <Button
        style={{backgroundColor: 'lime'}}
        title="Press Me"
        onPress={handlePress}
      />
    </View>
  );
};

/*

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          opacity: fadeAnim,
        }}
      />
      <Button title="Fade In View" onPress={fadeIn} />
    </View>
  );



*/

export default App;
