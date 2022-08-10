import React from 'react';
import Svg, { Rect, Path } from "react-native-svg"

const LogoSvg = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect width={24} height={24} rx={12} fill="#177EFF" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.646 9.227H19.4V7.549c0-1.11-.976-2.013-2.115-2.013H9.532v1.678c0 1.111.975 2.013 2.114 2.013zm-4.934 9.237h7.753v-1.678c0-1.111-.975-2.013-2.114-2.013H4.598v1.678c0 1.11.976 2.013 2.114 2.013zm5.22-4.62c-.036-.002-.066-.003-.11.001H4.598v-1.677c0-1.101.97-2.013 2.114-2.013H19.4v1.677c0 1.101-.97 2.013-2.114 2.013h-5.287l-.067-.001z"
        fill="#fff"
      />
    </Svg>
  )
}
const ArrowIcon = () => {
  return (
     <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11.165 6.918L4.083 14l7.082 7.082M23.917 14H4.282"
        stroke="#151C26"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
const PlusIcon = () => {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width={80} height={80} rx={12} fill="#F2F3F3" />
      <Path
        d="M40 53.333c7.333 0 13.333-6 13.333-13.333s-6-13.333-13.333-13.333-13.333 6-13.333 13.333 6 13.333 13.333 13.333zM34.667 40h10.666M40 45.333V34.667"
        stroke="#8A8C90"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export {
  LogoSvg,
  ArrowIcon,
  PlusIcon
}
