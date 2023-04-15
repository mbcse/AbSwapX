import React from "react";

const Error = ({text}) => {
  return (
    <div className="flex flex-row justify-start items-center w-full h-full p-[24px] gap-[10px] bg-[rgba(255,106,123,0.3)]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.68394 17.5556C2.6203 15.9666 2 14.0557 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.0055 22 8.14731 21.4161 6.58717 20.4098"
          stroke="#DE1D1D"
          stroke-linecap="round"
        />
        <path
          d="M12.5 17L12.5 11"
          stroke="#DE1D1D"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.5 11L12.5 11"
          stroke="#DE1D1D"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 8L12.5 7"
          stroke="#DE1D1D"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="flex flex-row justify-center items-center gap-[10px] rounded-[4px]">
        <h1 className="font-normal text-base items-center flex text-[#464646]">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Error;
