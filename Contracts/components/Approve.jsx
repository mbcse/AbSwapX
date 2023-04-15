import { ethers } from "ethers";
import React, { useState, useContext } from "react";
import { FACTORY_ADDRESSES, TxBTN } from "../constants";
import ERC_20 from "../abis/ERC_20.json";
import { AppContext } from "../context/AppContext";

const Approve = ({ giveAllowance, txHash, process, tokenInput1, tokeninput }) => {

  const { step,
    setStep,
    data,
    setData,
    onExecuteOrder } = useContext(AppContext);

  const [onetomany, setOnetomany] = useState(true);

  return (
    <div classname="flex flex-col justify-start items-start w-full">
      <div className="flex flex-col items-center px-[15px] py-[10px]">
        <h1 className="font-normal text-sm flex items-center text-[#464646]">
          To trade the following tokens on Zap, please send below and grant
          permission in your wallet.
        </h1>
      </div>
      <div className="flex flex-col items-start p-[15px] gap-[15px] bg-[rgba(16,187,53,0.12)] w-full">
        <div className="flex  justify-start items-center w-full">
          <h1 classname="font-normal text-sm flex items-center text-[#464646]">
            Approval Required
          </h1>
        </div>
        {/*token approval */}
        {onetomany ? (<div className="flex flex-row justify-between items-center px-[10px] py-[17px] w-full gap-4 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg">
          <div className="flex flex-row items-center gap-4">
            <img
              src={tokenInput1?.icon}
              className="w-[30px] h-[30px] object-contain rounded-full"
            />
            <h1 className="font-semibold text-lg text-[#464646]">{tokenInput1?.name}</h1>
          </div>
          <div>
            {process === 0 && (
              <button
                className="bg-primary-green py-[5px] px-[15px] gap-[7px] rounded-md font-semibold text-base text-white"
                onClick={() => { giveAllowance() }}
              >
                Send
              </button>
            )}
            {process === 1 && (
              <button className="py-[5px] flex flex-row justify-center items-center  px-[15px] gap-[7px] rounded-md font-medium text-xs text-[#464646]">
                <img
                  src="/loading.png"
                  className="w-[24px] h-[24px] object-contain rounded-full animate-spin "
                />
                confirm in wallet
              </button>

            )}
            {
              process === 2 && (
                <div className="flex flex-row justify-end  items-center gap-2">
                  <button className="py-[5px] flex flex-row justify-end items-center  px-[6px] gap-[7px]  rounded-md font-medium text-xs text-[#464646]">
                    <img
                      src="/loading.png"
                      className="w-[24px] h-[24px] object-contain rounded-full animate-spin "
                    />
                    Processing
                  </button>
                  <a href={txHash} target="_blank">
                    <button className="py-[5px] flex flex-row justify-end items-center hover:bg-[rgba(16,187,53,0.12)] border border-white hover:border hover:border-[#10bb35] px-[6px] gap-[7px] rounded-md font-medium text-xs text-[#464646]">
                      <TxBTN />
                      View Transaction
                    </button>
                  </a>
                </div>
              )
            }
            {/* after a delay it go to review page */}
            {process === 3 && (
              <div className="flex flex-row justify-end  items-center gap-2">
                <button className="py-[5px] flex flex-row justify-end items-center  px-[6px] gap-[7px]  rounded-md font-medium text-xs text-primary-green">
                  Send
                </button>
                <a href={txHash} target="_blank">
                  <button className="py-[5px] flex flex-row justify-end items-center hover:bg-[rgba(16,187,53,0.12)] border border-white hover:border hover:border-[#10bb35] px-[6px] gap-[7px] rounded-md font-medium text-xs text-[#464646]">
                    <TxBTN />
                    View Transaction
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>) : (<>                    {tokeninput.map((item, i) => (

          <div key={i} className="flex flex-row justify-between items-center px-[10px] py-[17px] w-full gap-4 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg">
            <div className="flex flex-row items-center gap-4">
              <img
                src={item.icon}
                className="w-[30px] h-[30px] object-contain rounded-full"
              />
              <h1 className="font-semibold text-lg text-[#464646]">{item.name}</h1>
            </div>
            <div>
              {process === 0 && (
                <button
                  className="bg-primary-green py-[5px] px-[15px] gap-[7px] rounded-md font-semibold text-base text-white"
                  onClick={() => { giveAllowance() }}
                >
                  Send
                </button>
              )}
              {process === 1 && (
                <button className="py-[5px] flex flex-row justify-center items-center  px-[15px] gap-[7px] rounded-md font-medium text-xs text-[#464646]">
                  <img
                    src="/loading.png"
                    className="w-[24px] h-[24px] object-contain rounded-full animate-spin "
                  />
                  confirm in wallet
                </button>

              )}
              {
                process === 2 && (
                  <div className="flex flex-row justify-end  items-center gap-2">
                    <button className="py-[5px] flex flex-row justify-end items-center  px-[6px] gap-[7px]  rounded-md font-medium text-xs text-[#464646]">
                      <img
                        src="/loading.png"
                        className="w-[24px] h-[24px] object-contain rounded-full animate-spin "
                      />
                      Processing
                    </button>
                    <a href={txHash} target="_blank">
                      <button className="py-[5px] flex flex-row justify-end items-center hover:bg-[rgba(16,187,53,0.12)] border border-white hover:border hover:border-[#10bb35] px-[6px] gap-[7px] rounded-md font-medium text-xs text-[#464646]">
                        <TxBTN />
                        View Transaction
                      </button>
                    </a>
                  </div>
                )
              }
              {/* after a delay it go to review page */}
              {process === 3 && (
                <div className="flex flex-row justify-end  items-center gap-2">
                  <button className="py-[5px] flex flex-row justify-end items-center  px-[6px] gap-[7px]  rounded-md font-medium text-xs text-primary-green">
                    Sent
                  </button>
                  <a href={txHash} target="_blank">
                    <button className="py-[5px] flex flex-row justify-end items-center hover:bg-[rgba(16,187,53,0.12)] border border-white hover:border hover:border-[#10bb35] px-[6px] gap-[7px] rounded-md font-medium text-xs text-[#464646]">
                      <TxBTN />
                      View Transaction
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))
        }
        </>

        )
        }

      </div>

    </div>
  );
};

export default Approve;
