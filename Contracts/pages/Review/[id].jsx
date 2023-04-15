import React, { useEffect, useState } from "react";
import Trade from "../../components/Trade";
import { toast } from "react-toastify";

const review = () => {
  const [confirm, setConfirm] = useState(true);
  const [enabled, setEnabled] = useState(true);
  const [trade, setTrade] = useState(false);
  const [tokeninput, setTokeninput] = useState({});

  const [tokeninput1, setTokeninput2] = useState({});
  const [sellamount, setSellmount] = useState(0);
  const [buyamount, setBuyamount] = useState(0);
  const [dollar, setDollar] = useState(0);
  const [check, setCheck] = useState(false);
  const [confirmstream, setConfirmstream] = useState(0);
  const [schedule, setSchedule] = useState(true);
  const [priceschedule, setPriceschedule] = useState(false);
  const [timeprice, setTimeprice] = useState(0);
  const [time, setTime] = useState({});

  const [frequency, setFrequency] = useState(0);
  const [scheduleprice, setScheduleprice] = useState(0);
  const [amount, setAmount] = useState(0);
  // useEffect(() => {
  // if (confirmstream === 1) {
  // router.push("/Complete/[id]");
  // }else {
  // toast.error("Confirm in metamask")
  // }
  // }, [confirmstream]);

  return (
    <div className="flex justify-center items-center w-full pt-6  ">
      <div className="flex flex-col justify-center items-center py-4 px-5  gap-3 bg-white rounded-2xl">
        <div className="flex flex-col justify-center items-center py-2 gap-[5px] ">
          <h1 className="font-semibold text-base text-[#464646]">
            Review order
          </h1>
        </div>
        <img
          src="/Checking.png"
          alt="sucess"
          className="w-[217px] h-[210px] object-contain"
        />
        <div className="flex flex-col items-center  gap-2">
          <div className="flex flex-col items-start  py-3 gap-[5px] rounded-lg w-[698px]">
            <h1 className="font-semibold text-sm text-[rgba(70, 70, 70, 0.9)]">
              You sell
            </h1>
          </div>
          <div className="flex flex-col justify-start items-center p-4 gap-5 border rounded-[10px] border-[rgba(70,70,70,0.2)] w-full">
            <div className="flex flex-row items-start justify-start w-full gap-1">
              <h1 className="font-normal text-sm text-center text-[#637592]">
                From --
              </h1>
              <div className="flex flex-row items-center gap-[8px]">
                <img
                  src="data:image/png;base64,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"
                  alt="icon"
                  className="w-[30px] h-[30px] object-contain rounded-full"
                />
                <h1 className="text-sm text-center text-[#464646] font-semibold">
                  Polygon
                </h1>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center py-[13px] px-4 w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-lg">
              <div className="flex flex-row items-center gap-[18px]">
                <img
                  src="data:image/png;base64,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"
                  alt="icon"
                  className="w-[30px] h-[30px] object-contain rounded-full"
                />
                <h1 className="font-semibold text-lg text-[#464646]">
                  {tokeninput?.name}
                </h1>
              </div>
              <div className="flex flex-col items-end gap-2 ">
                <h1 className="font-semibold text-base text-[#464646]">
                  {" "}
                  {sellamount} {tokeninput?.name}
                </h1>
                <h1 className="font-normal text-sm text-[#464646]">
                  ${dollar}
                </h1>
              </div>
            </div>
          </div>
          <div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 13.0625L12.7929 10.7696C13.1834 10.3791 13.8166 10.3791 14.2071 10.7696L16.5 13.0625"
                stroke="#464646"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M13.5 14.0625V16.3125V18.5625V23.0625"
                stroke="#464646"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M19.5 22.0625L21.7929 24.3554C22.1834 24.7459 22.8166 24.7459 23.2071 24.3554L25.5 22.0625"
                stroke="#464646"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M22.5 21.0625L22.5 12.0625"
                stroke="#464646"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <rect
                x="-0.5"
                y="0.5"
                width="34"
                height="34"
                rx="17"
                transform="matrix(-1 8.74228e-08 8.74228e-08 1 34.5 0.0625)"
                stroke="black"
                stroke-opacity="0.1"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start  py-3 gap-[5px] rounded-lg w-[698px]">
            <h1 className="font-semibold text-sm text-[rgba(70, 70, 70, 0.9)]">
              You Buy
            </h1>
          </div>
          <div className="flex flex-col justify-start items-center p-4 gap-5 border rounded-[10px] border-[rgba(70,70,70,0.2)] w-full">
            <div className="flex flex-row items-start gap-1 w-full">
              <h1 className="font-normal text-sm text-center text-[#637592]">
                To --
              </h1>

              <div className="flex flex-row items-center gap-[8px]">
                <img
                  src="/goerli.png"
                  alt="icon"
                  className="w-[30px] h-[30px] object-contain rounded-full"
                />
                <h1 className="text-sm text-center text-[#464646] font-semibold">
                  Gnosis
                </h1>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center py-[13px] px-4 w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-lg">
              <div className="flex flex-row items-center gap-[18px]">
                <img
                  src={tokeninput1?.icon}
                  alt="icon"
                  className="w-[30px] h-[30px] object-contain rounded-full"
                />
                <h1 className="font-semibold text-lg text-[#464646]">
                  {tokeninput1?.name}
                </h1>
                <button className="flex justify-center items-center p-[12px] bg-primary-green rounded-md">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.12 0.796875L12.72 0.796875C14.9291 0.796875 16.72 2.58774 16.72 4.79688L16.72 12.7969C16.72 15.006 14.9291 16.7969 12.72 16.7969L4.72 16.7969C2.51086 16.7969 0.720001 15.006 0.720001 12.7969L0.720001 4.79688C0.720001 2.58774 2.51086 0.796876 4.72 0.796876L6.32 0.796875"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6.32001 9.59707L8.15432 11.4314C8.46674 11.7438 8.97327 11.7438 9.28569 11.4314L11.12 9.59707"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.72001 11.1967L8.72001 5.59668"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-end gap-2 ">
                <h1 className="font-semibold text-base text-[#464646]">
                  {" "}
                  {buyamount} {tokeninput1?.name}
                </h1>
                <h1 className="font-normal text-sm text-[#464646]">
                  {" "}
                  ${dollar}
                </h1>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center py-[13px] px-4 w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-lg">
              <div className="flex flex-row items-center gap-[18px]">
                <img
                  src={tokeninput1?.icon}
                  alt="icon"
                  className="w-[30px] h-[30px] object-contain rounded-full"
                />
                <h1 className="font-semibold text-lg text-[#464646]">
                  {tokeninput1?.name}
                </h1>
                {/* import token button */}
                <button className="flex justify-center items-center p-[12px] bg-primary-green rounded-md">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.12 0.796875L12.72 0.796875C14.9291 0.796875 16.72 2.58774 16.72 4.79688L16.72 12.7969C16.72 15.006 14.9291 16.7969 12.72 16.7969L4.72 16.7969C2.51086 16.7969 0.720001 15.006 0.720001 12.7969L0.720001 4.79688C0.720001 2.58774 2.51086 0.796876 4.72 0.796876L6.32 0.796875"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6.32001 9.59707L8.15432 11.4314C8.46674 11.7438 8.97327 11.7438 9.28569 11.4314L11.12 9.59707"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.72001 11.1967L8.72001 5.59668"
                      stroke="white"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-end gap-2 ">
                <h1 className="font-semibold text-base text-[#464646]">
                  {" "}
                  {buyamount} {tokeninput1?.name}
                </h1>
                <h1 className="font-normal text-sm text-[#464646]">
                  {" "}
                  ${dollar}
                </h1>
              </div>
            </div>
          </div>
        </div>
        {schedule ? (
          <div className="flex flex-col items-center gap-[10px] w-full bg-[rgba(16,187,53,0.12)] border border-[#10bb35] rounded-[9px]">
            {priceschedule ? (
              <div className="flex flex-row justify-start items-center w-full gap-[8px] p-4 ">
                <h1 className="font-normal text-sm text-center text-[#464646] w-[170px]">
                  Price based Schedule:-
                </h1>
                <div className="flex flex-row justify-center items-center gap[2px]">
                  <h1 className="font-semibold text-base text-[#464646] text-center">
                    The swap will occur when
                  </h1>
                  <div className="flex flex-row items-center gap-[10px]">
                    <img
                      src={tokeninput1?.icon}
                      alt="icon"
                      className="w-[20px] h-[20px] object-contain rounded-full"
                    />
                    <h1 className="font-semibold text-base text-[#464646]">
                      {tokeninput1?.name}
                    </h1>
                  </div>
                  <h1 className="font-semibold text-base text-[#464646] text-center">
                    price is {scheduleprice}
                  </h1>
                </div>
              </div>
            ) : (
              <div className="flex flex-row items-center gap-[8px] p-4 w-full">
                <h1 className="font-normal text-sm text-left text-[#464646] w-[170px]">
                  Time based DCA:-
                </h1>
                <div className="flex  justify-start items-center w-full gap-[2px]">
                <h1 classname="font-semibold text-sm flex items-center text-[#464646] w-full">
                 {amount} </h1>
                <div className="flex flex-row items-center gap-[5px]">
                    <img
                      src={tokeninput?.icon}
                      alt="icon"
                      className="w-[10px] h-[10px] object-contain rounded-full"
                    />
                    <h1 className="font-semibold text-base text-[#464646]">
                      {tokeninput?.name}
                    </h1>
                  </div>
                    <h1 classname="font-semibold text-base flex items-center text-[#464646] w-full">
                  will be swapped to   
                </h1>
                {/*  tokens which user select */}
                <div className="flex flex-row items-center gap-[5px]">
                    <img
                      src={tokeninput?.icon}
                      alt="icon"
                      className="w-[10px] h-[10px] object-contain rounded-full"
                    />
                    <h1 className="font-semibold text-base text-[#464646]">
                      {tokeninput?.name}
                    </h1>
                  </div>
                  <h1 classname="font-semibold text-base flex items-center text-[#464646] w-full">
                   ,at the frequency of ({{amount}/{frequency}}) 
                </h1>
                <div className="flex flex-row items-center gap-[5px]">
                    <img
                      src={tokeninput?.icon}
                      alt="icon"
                      className="w-[10px] h-[10px] object-contain rounded-full"
                    />
                    <h1 className="font-semibold text-base text-[#464646]">
                      {tokeninput?.name}
                    </h1>
                  </div>
                  <h1 classname="font-semibold text-base flex items-center text-[#464646] w-full">
                   /{time?.name}
                </h1>
                  
              </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-[10px] w-full">
            <div className="flex flex-row justify-between w-full items-start">
              <h1 className="font-medium text-sm text-left text-[rgba(70,70,70,0.6)]">
                Quote Expries in 5 sec
              </h1>
              <div className="flex flex-row items-center gap-2">
                <h1 className="font-semibold text-sm text-left text-[#464646]">
                  Auto Refresh
                </h1>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    onClick={() => {
                      setEnabled(!enabled);
                      setConfirm(!confirm);
                    }}
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    checked={enabled}
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </div>
            </div>
            <div class="w-full h-2 bg-blue-200 rounded-full">
              <div class="w-2/3 h-full text-center text-xs text-white bg-primary-green rounded-full"></div>
            </div>
          </div>
        )}
        <div className="flex flex-col justify-center items-center w-full gap-2">
          <Trade />

          {confirm ? (
            <div className="flex flex-col justify-center items-center gap-3">
              {check ? (
                <>
                  <button className="bg-primary-green flex flex-row justify-center items-center gap-2 py-[10px] px-[30px]  rounded-lg font-semibold text-base text-white">
                    <img
                      src="/process.png"
                      className="w-[24px] h-[24px] object-contain rounded-full animate-spin "
                    />
                    Checking for confirmation
                  </button>
                  <h1 className="text-sm text-[#464646] font-normal">
                    Confirm Stream in Metamask
                  </h1>
                </>
              ) : (
                <>
                  <div className="flex flex-row justify-center items-center gap-2">
                    <div className="w-9 h-[5px] bg-primary-green rounded-l-sm" />
                    <div className="w-9 h-[5px] bg-primary-green " />
                    <div className="w-9 h-[5px] bg-[rgba(16,187,53,0.12)] " />

                    <div className="w-9 h-[5px] bg-[rgba(16,187,53,0.12)] rounded-r-sm" />
                  </div>
                  <button className="bg-primary-green flex flex-row justify-center items-center gap-2 py-[10px] px-[30px]  rounded-lg font-semibold text-base text-white">
                    <img
                      src="/process.png"
                      className="w-[24px] h-[24px] object-contain rounded-full animate-spin "
                    />
                    Loading
                  </button>
                  <h1 className="text-sm text-[#464646] font-normal">
                    check your metamask
                  </h1>
                </>
              )}

              {/*Button after confirming */}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="flex flex-row justify-center items-center gap-2">
                {/* active */}
                <div className="w-9 h-[5px] bg-primary-green rounded-l-sm" />
                <div className="w-9 h-[5px] bg-primary-green " />
                {/*non active */}
                <div className="w-9 h-[5px] bg-[rgba(16,187,53,0.12)] " />
                <div className="w-9 h-[5px] bg-[rgba(16,187,53,0.12)] rounded-r-sm" />
              </div>
              <button
                onClick={setConfirm}
                className="bg-primary-green py-[10px] px-[30px]  rounded-lg font-semibold text-base text-white"
              >
                Refresh Quote
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default review;
