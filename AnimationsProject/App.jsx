import {View, Text, Animated, Button} from 'react-native';
import React from 'react';

const App = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
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
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [150, 0], // 0 : 150, 0.5 : 75, 1 : 0
              }),
            },
          ],
        }}
      />
      <Button title="Fade In View" onPress={fadeIn} />
      <Button title="Fade Out View" onPress={fadeOut} />
    </View>
  );
};

export default App;
