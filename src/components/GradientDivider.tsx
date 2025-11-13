import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientDivider = () => {
  return (
    <LinearGradient
      colors={[
        'rgba(61,151,204,0.11)',
        'rgba(61,151,204,0.05)',
        'rgba(61,151,204,0.05)',
        'rgba(61,151,204,0.11)',
      ]}
      locations={[0, 0.5, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ height: 1, marginVertical: 18 }}
    />
  );
};

export default GradientDivider;
