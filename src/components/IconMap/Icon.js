import React from "react";

const IconMap = {
  trident: Trident
};

const Icon = function(props) {
  const { name, color = "white", size = 16, ...rest } = props;
  const Drawing = IconMap[name] ? IconMap[name] : null;

  return (
    <svg width={size} height={size} {...rest} viewBox="0 0 240 480">
      <Drawing color={color} />
    </svg>
  );
};

function Trident(props) {
  return (
    <path
      d="M100.599 243c-8.19 0-12.954-.075-15.724-4.528C42.292 224.49 21 199.332 21 163c0-61-20-36-20-120s20-20 20 0 20 80 20 120c0 24.626 22.742 41.672 40.23 51.137-.203-7.974-.203-18.15-.203-31.137 0-17.285.765-31.225 4.498-51 3.271-17.325 8.436-46.991 15.495-89 7.708 42.258 13.206 71.924 16.495 89 3.923 20.369 3.498 32.986 3.498 51 0 13.087 0 23.32-.197 31.321 17.487-9.465 40.224-26.51 40.224-51.133 0-40 20-100 20-120s20-84 20 0-20 59-20 120c0 36.304-21.26 61.451-63.78 75.44-2.489 4.047-6.63 4.354-13.518 4.372H107a8 8 0 0 1 8 8v384a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V251a8 8 0 0 1 8-8h4.599z"
      // stroke="#FE3B00"
      fill={props.color}
    />
  );
}

export default Icon;
