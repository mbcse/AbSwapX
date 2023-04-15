import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";


const complete = () => {

    const { step,
        setStep,
        data,
        setData,
        onExecuteOrder } = useContext(AppContext);



    const [sellchain, setSellchain] = useState({})
    const [buychain, setBuychain] = useState({})
    const [confirm, setConfirm] = useState(true);
    const [enabled, setEnabled] = useState(true);
    const [trade, setTrade] = useState(false);
    const [tokeninput, setTokeninput] = useState({});

    const [tokeninput1, setTokeninput2] = useState({});
    const [sellamount, setSellmount] = useState(0);
    const [buyamount, setBuyamount] = useState(0);
    const [dollar, setDollar] = useState(0);
    const [check, setCheck] = useState(false)
    const [confirmstream, setConfirmstream] = useState(0);
    return (
        <div className="flex justify-center items-center w-full pt-6  ">
            <div className="flex flex-col justify-center items-center py-4 px-5  gap-3 bg-white rounded-2xl">
                <div className="flex flex-col justify-center items-center py-2 gap-[5px] ">
                    <h1 className="font-semibold text-base text-[#464646]">
                        Order Completed
                    </h1>
                </div>
                <img
                    src="/Success.png"
                    alt="sucess"
                    className="w-[217px] h-[210px] object-contain"
                />
                <div className="flex flex-row justify-center items-center px-[24px] gap-[10px] ">
                    <h1 className="font-normal text-base text-center text-[#464646]">
                        Your trade was completed successfully !
                    </h1>
                </div>
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
                                    src={sellchain?.icon}
                                    alt="icon"
                                    className="w-[30px] h-[30px] object-contain rounded-full"
                                />
                                <h1 className="text-sm text-center text-[#464646] font-semibold">
                                    {sellchain?.name}
                                </h1>
                            </div>
                        </div>

                       {data._fromToken.map((item,i)=>{
                         <div key={i} className="flex flex-row justify-between items-center py-[13px] px-4 w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-lg">
                         <div className="flex flex-row items-center gap-[18px]">
                             <img
                                 src={item.icon} alt="icon"
                                 className="w-[30px] h-[30px] object-contain rounded-full"
                             />
                             <h1 className="font-semibold text-lg text-[#464646]">{item.name}</h1>
                         </div>
                         <div className="flex flex-col items-end gap-2 ">
                             <h1 className="font-semibold text-base text-[#464646]">
                                 {" "}
                                 {sellamount} {item.name}
                             </h1>
                             <h1 className="font-normal text-sm text-[#464646]">  ${dollar}</h1>
                         </div>
                     </div>
                       })}
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
                                    src={data.__toChain.icon}
                                    alt="icon"
                                    className="w-[30px] h-[30px] object-contain rounded-full"
                                />
                                <h1 className="text-sm text-center text-[#464646] font-semibold">
                                    {data._toChain.name}
                                </h1>
                            </div>
                        </div>
                        
                        {data._toToken.map((item,i)=>{
                            <div key={i} className="flex flex-row justify-between items-center py-[13px] px-4 w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-lg">
                            <div className="flex flex-row items-center gap-[18px]">
                                <img
                                    src={item.icon}
                                    alt="icon"
                                    className="w-[30px] h-[30px] object-contain rounded-full"
                                />
                                <h1 className="font-semibold text-lg text-[#464646]">{item.name}</h1>
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
                                    {buyamount} {item.name}
                                </h1>
                                <h1 className="font-normal text-sm text-[#464646]"> ${dollar}</h1>
                            </div>
                        </div>
                        })}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 w-full">
                    <div className="flex flex-row justify-center items-center gap-2">
                        <div className="w-9 h-[5px] bg-primary-green rounded-l-sm" />
                        <div className="w-9 h-[5px] bg-primary-green " />
                        <div className="w-9 h-[5px] bg-primary-green " />
                        <div className="w-9 h-[5px] bg-primary-green rounded-r-sm" />
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[10px] w-full">
                        <a href={txHash} target="_blank">
                            <button className="bg-[rgba(16,187,53,0.08)] py-[10px]  px-[20px] flex flex-row justify-center items-center  rounded-lg font-semibold text-base text-[#464646]">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.31653 10.0303V6.03027C4.31653 3.82113 6.10739 2.03027 8.31653 2.03027H12.3165H14.3798C14.9733 2.03027 15.5362 2.29392 15.9162 2.7499L19.853 7.474C20.1525 7.83343 20.3165 8.2865 20.3165 8.75437V12.0303V18.0303C20.3165 20.2394 18.5257 22.0303 16.3165 22.0303H8.31653C6.10739 22.0303 4.31653 20.2394 4.31653 18.0303V15.0303"
                                        stroke="#464646"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M15.3165 2.53027V6.03027C15.3165 6.58372 15.5413 7.08467 15.9046 7.44677C16.2664 7.80736 16.7654 8.03027 17.3165 8.03027"
                                        stroke="#464646"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M8.31653 12.0303H12.3165"
                                        stroke="#464646"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M16.3165 12.0303H15.3165"
                                        stroke="#464646"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M8.31653 17.0303H12.3165"
                                        stroke="#464646"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                </svg>
                                View Transaction
                            </button>

                        </a>


                        <button
                            onClick={setStep(0)}
                            className="bg-primary-green py-[10px] px-[20px]  rounded-lg font-semibold text-base text-white">
                            Make Another Trade
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default complete;
