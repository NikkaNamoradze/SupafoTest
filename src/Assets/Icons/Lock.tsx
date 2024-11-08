import React from 'react';
import Svg, {Path} from 'react-native-svg';

const LockIcon = () => {
  return (
    <Svg width="15" height="17" viewBox="0 0 15 17" fill="none">
      <Path
        d="M3.95833 7.7915V4.95817C3.95833 4.01886 4.33147 3.11803 4.99566 2.45383C5.65985 1.78964 6.56069 1.4165 7.5 1.4165C8.43931 1.4165 9.34014 1.78964 10.0043 2.45383C10.6685 3.11803 11.0417 4.01886 11.0417 4.95817V7.7915M2.54167 7.7915H12.4583C13.2407 7.7915 13.875 8.42577 13.875 9.20817V14.1665C13.875 14.9489 13.2407 15.5832 12.4583 15.5832H2.54167C1.75926 15.5832 1.125 14.9489 1.125 14.1665V9.20817C1.125 8.42577 1.75926 7.7915 2.54167 7.7915Z"
        stroke="black"
        stroke-opacity="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default LockIcon;
