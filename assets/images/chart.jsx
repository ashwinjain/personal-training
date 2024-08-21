import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Chart(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      viewBox="0 -960 960 960"
      width="20px"
      fill="#F46700"
      {...props}
    >
      <Path d="M192-192v-96l72-72v168h-72zm126 0v-222l66-66 6 6v282h-72zm126 0v-228l72 72v156h-72zm126 0v-186l72-72v258h-72zm126 0v-312l72-72v384h-72zM192-378v-102l192-192 144 144 240-240v102L528-426 384-570 192-378z" />
    </Svg>
  )
}

export default Chart
