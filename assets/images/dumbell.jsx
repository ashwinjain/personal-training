import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Dumbell(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="16px"
      viewBox="0 -960 960 960"
      width="16px"
      fill="#F46700"
      {...props}
    >
      <Path d="M536-84l-56-56 142-142-340-340-142 142-56-56 56-58-56-56 84-84-56-58 56-56 58 56 84-84 56 56 58-56 56 56-142 142 340 340 142-142 56 56-56 58 56 56-84 84 56 58-56 56-58-56-84 84-56-56-58 56z" />
    </Svg>
  );
}

export default Dumbell;
