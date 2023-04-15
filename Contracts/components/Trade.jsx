import React, { useState } from 'react'
import { Tooltip, Chip } from "@heathmont/moon-core-tw";

const Trade = () => {
  const [trade, setTrade] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center w-full gap-2">
      <div className="flex flex-col w-full justify-center items-center gap-3">
        <div className="flex flex-row justify-between items-center w-full py-2 border-b border-b-[rgba(0,0,0,0.1)] ">
          <button className="flex flex-row justify-center items-center gap-2 "
            onClick={() => setTrade(!trade)}>
            <h1 className="font-semibold text-sm text-center text-[#464646]">
              Trade Details{" "}
            </h1>
            {trade ? (<div className="stroke-[#464646]"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 14.125L12 10.125L8 14.125" stroke="#464646" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>) : (<div className="stroke-[#464646]">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10.125L12 14.125L16 10.125"
                  stroke="#464646"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>)}
          </button>
          <div className="flex flex-row justify-center items-center gap-1">
            <h1 className="font-semibold text-sm text-center text-[#464646]">
              Ethereum Fee:{" "}
            </h1>
            <h1 className="font-semibold text-sm text-center text-[#464646]">
              $ 26.45 &#40;included&#41;
            </h1>
            <Tooltip>
              <Tooltip.Trigger>
                <Chip>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.68394 17.5556C2.6203 15.9666 2 14.0557 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.0055 22 8.14731 21.4161 6.58717 20.4098"
                      stroke="#464646"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12.5 17L12.5 11"
                      stroke="#464646"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5 11L12.5 11"
                      stroke="#464646"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 8L12.5 7"
                      stroke="#464646"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Chip>
              </Tooltip.Trigger>
              <Tooltip.Content
                position="right"
                className="bg-white p-2 text-[#464646] text-xs font-normal w-[200px] h-full"
              >
                This fee is know as the network or gas fee and is
                determined by network demand.It does not go to Bebop.
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip>
          </div>
        </div>
        {trade ? (<div className="flex flex-col items-start px-[30px] py-[20px] gap-[10px] bg-[rgba(16,187,53,0.08)] border border-[#10bb35] rounded-[10px] w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="font-normal text-sm text-[#464646]">
              Ethereum Fee
            </h1>
            <h1 className="font-semibold text-sm text-[#10BB35]">
              0.01105 &#40;$26.45&#41;
            </h1>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row justify-start items-center gap-2">
              <h1 className="font-normal text-sm text-[#464646]">
                Will be converted
              </h1>
              <Tooltip>
                <Tooltip.Trigger>
                  <Chip>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.68394 17.5556C2.6203 15.9666 2 14.0557 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.0055 22 8.14731 21.4161 6.58717 20.4098"
                        stroke="#464646"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.5 17L12.5 11"
                        stroke="#464646"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 11L12.5 11"
                        stroke="#464646"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5 8L12.5 7"
                        stroke="#464646"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Chip>
                </Tooltip.Trigger>
                <Tooltip.Content
                  position="right"
                  className="bg-white p-2 text-[#464646] text-xs font-normal w-[200px] h-full"
                >
                  Difference between the price you see and the price that
                  you get. You will not encounter slippage on Bebop.
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip>
            </div>
            <h1 className="font-semibold text-sm text-[#10BB35]">
              0.98993
            </h1>
          </div>
          <div className="flex flex-row items-start justify-between w-full">
            <div className="flex flex-row justify-start items-center gap-2">
              <h1 className="font-normal text-sm text-[#464646]">
                Rates
              </h1>
              <Tooltip>
                <Tooltip.Trigger>
                  <Chip>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.68394 17.5556C2.6203 15.9666 2 14.0557 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.0055 22 8.14731 21.4161 6.58717 20.4098"
                        stroke="#464646"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.5 17L12.5 11"
                        stroke="#464646"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 11L12.5 11"
                        stroke="#464646"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5 8L12.5 7"
                        stroke="#464646"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Chip>
                </Tooltip.Trigger>
                <Tooltip.Content
                  position="right"
                  className="bg-white p-2 text-[#464646] text-xs font-normal w-[200px] h-full"
                >
                  Exchange rates used for this trade. Rates reflect
                  current market prices.
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip>
            </div>
            <div className="flex flex-col items-end justify-between w-full gap-[10px]">
              <div className="flex flex-row justify-start items-center gap-2">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 19.125L5.70711 16.8321C5.31658 16.4416 5.31658 15.8084 5.70711 15.4179L8 13.125"
                    stroke="#10BB35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M9 16.125H18"
                    stroke="#10BB35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M17 10.125L19.2929 7.83211C19.6834 7.44158 19.6834 6.80842 19.2929 6.41789L17 4.125"
                    stroke="#10BB35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 7.125H7"
                    stroke="#10BB35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <h1 className="font-semibold text-sm text-right text-[#10BB35]">
                  1 BAL = 0.00377 WETH
                </h1>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 19.125L5.70711 16.8321C5.31658 16.4416 5.31658 15.8084 5.70711 15.4179L8 13.125"
                    stroke="#10BB35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M9 16.125H18"
                    stroke="#10BB35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M17 10.125L19.2929 7.83211C19.6834 7.44158 19.6834 6.80842 19.2929 6.41789L17 4.125"
                    stroke="#10BB35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 7.125H7"
                    stroke="#10BB35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <h1 className="font-semibold text-sm text-right text-[#10BB35]">
                  1 WETH = 24.84077
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row justify-start items-center gap-2">
              <h1 className="font-normal text-sm text-[#464646]">
                Slippage
              </h1>
              <Tooltip>
                <Tooltip.Trigger>
                  <Chip>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.68394 17.5556C2.6203 15.9666 2 14.0557 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.0055 22 8.14731 21.4161 6.58717 20.4098"
                        stroke="#464646"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.5 17L12.5 11"
                        stroke="#464646"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 11L12.5 11"
                        stroke="#464646"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5 8L12.5 7"
                        stroke="#464646"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Chip>
                </Tooltip.Trigger>
                <Tooltip.Content
                  position="right"
                  className="bg-white p-2 text-[#464646] text-xs font-normal w-[200px] h-full"
                >
                  Difference between the price you see and the price that
                  you get. You will not encounter slippage on Bebop.
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip>
            </div>
            <h1 className="font-semibold text-sm text-[#464646]">
              0% on Bebop
            </h1>
          </div>
        </div>) : (
          <div className="hidden"></div>
        )}
      </div>
    </div>
  )
}

export default Trade