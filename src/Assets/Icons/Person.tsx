import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PersonIcon = () => {
  return (
    <Svg width="13" height="15" viewBox="0 0 13 15" fill="none">
      <Path
        d="M12.1668 13.875V12.4583C12.1668 11.7069 11.8683 10.9862 11.337 10.4549C10.8056 9.92351 10.0849 9.625 9.3335 9.625H3.66683C2.91538 9.625 2.19471 9.92351 1.66336 10.4549C1.13201 10.9862 0.833496 11.7069 0.833496 12.4583V13.875M9.3335 3.95833C9.3335 5.52314 8.06497 6.79167 6.50016 6.79167C4.93536 6.79167 3.66683 5.52314 3.66683 3.95833C3.66683 2.39353 4.93536 1.125 6.50016 1.125C8.06497 1.125 9.3335 2.39353 9.3335 3.95833Z"
        stroke="black"
        strokeOpacity="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PersonIcon;
