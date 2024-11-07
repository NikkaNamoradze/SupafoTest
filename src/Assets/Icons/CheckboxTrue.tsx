import React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const CheckboxTrue = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" rx="5" fill="#66AE7B" />
      <Rect x="0.5" y="0.5" width="23" height="23" rx="2.5" stroke="#66AE7B" />
      <Rect x="0.5" y="0.5" width="23" height="23" rx="2.5" stroke="#66AE7B" />
      <Path
        d="M18 7.5L9.75 15.75L6 12"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CheckboxTrue;
