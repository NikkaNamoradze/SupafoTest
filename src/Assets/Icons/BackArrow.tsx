import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const BackArrow = () => {
  return (
    <Svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <Path
        d="M7 1L1 7L7 13"
        stroke="#66AE7B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BackArrow;
