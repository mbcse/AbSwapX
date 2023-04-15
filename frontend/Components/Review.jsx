import React, { useEffect, useState, useContext } from "react";
import Trade from "../components/Trade";
import { SwapBTN, TxBTN } from "../constants";
import { AppContext } from "../context/AppContext";
import { chain } from "wagmi";
import Schedule from "./Schedule";
import Modal from "./Modal";

const Review = () => {

    const { step,
        setStep,
        data,
        setData,
        onExecuteOrder } = useContext(AppContext);


    const [confirm, setConfirm] = useState(true);
    const [enabled, setEnabled] = useState(true);
    const [trade, setTrade] = useState(false);
    const [tokeninput, setTokeninput] = useState({});

    const [tokeninput1, setTokeninput2] = useState({});
    const [sellamount, setSellmount] = useState(0);
    const [buyamount, setBuyamount] = useState(0);
    const [dollar, setDollar] = useState(0);
    const [check, setCheck] = useState(0);
    const [confirmstream, setConfirmstream] = useState(0);
    const [schedule, setSchedule] = useState(false);
    const [priceschedule, setPriceschedule] = useState(false);
    const [timeprice, setTimeprice] = useState(0);
    const [time, setTime] = useState({});

    const [frequency, setFrequency] = useState(0);
    const [scheduleprice, setScheduleprice] = useState(0);
    const [amount, setAmount] = useState(0);

    const onSubmit = () => {
        onExecuteOrder(setCheck, setStep);
    }

    const [onetomany, setOnetomany] = useState(true);

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
                                    src={chain?.icon}
                                    alt="icon"
                                    className="w-[30px] h-[30px] object-contain rounded-full"
                                />
                                <h1 className="text-sm text-center text-[#464646] font-semibold">
                                    {chain?.name}
                                </h1>
                            </div>
                        </div>
                        {onetomany ? (<div className="flex flex-row justify-between items-center py-[13px] px-4 w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-lg">
                            <div className="flex flex-row items-center gap-[18px]">
                                <img
                                    src={data._fromToken.icon}
                                    alt="icon"
                                    className="w-[30px] h-[30px] object-contain rounded-full"
                                />
                                <h1 className="font-semibold text-lg text-[#464646]">
                                    {data._fromToken.name}
                                </h1>
                            </div>
                            <div className="flex flex-col items-end gap-2 ">
                                <h1 className="font-semibold text-base text-[#464646]">
                                    {" "}
                                    {data._amount} {data._fromToken.name}
                                </h1>
                                <h1 className="font-normal text-sm text-[#464646]">
                                    ${dollar}
                                </h1>
                            </div>
                        </div>) : (
                            <>
                                {data._fromToken.map((item, i) => (
                                    <div key={i} className="flex flex-row justify-between items-center py-[13px] px-4 w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-lg">
                                        <div className="flex flex-row items-center gap-[18px]">
                                            <img
                                                src={item.icon}
                                                alt="icon"
                                                className="w-[30px] h-[30px] object-contain rounded-full"
                                            />
                                            <h1 className="font-semibold text-lg text-[#464646]">
                                                {item.name}
                                            </h1>
                                        </div>
                                        <div className="flex flex-col items-end gap-2 ">
                                            <h1 className="font-semibold text-base text-[#464646]">
                                                {" "}
                                                {data._amount} {item.name}
                                            </h1>
                                            <h1 className="font-normal text-sm text-[#464646]">
                                                ${dollar}
                                            </h1>
                                        </div>
                                    </div>
                                ))}
                            </>)}
                    </div>
                    <div>
                        <SwapBTN />
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
                                    src={data._toChain?.icon}
                                    alt="icon"
                                    className="w-[30px] h-[30px] object-contain rounded-full"
                                />
                                <h1 className="text-sm text-center text-[#464646] font-semibold">
                                    {data._toChain?.name}
                                </h1>
                            </div>
                        </div>
                        {data._toToken.map((item, i) => (
                            <div key={i} className="flex flex-row justify-between items-center py-[13px] px-4 w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-lg">
                                <div className="flex flex-row items-center gap-[18px]">
                                    <img
                                        src={item?.icon}
                                        alt="icon"
                                        className="w-[30px] h-[30px] object-contain rounded-full"
                                    />
                                    <h1 className="font-semibold text-lg text-[#464646]">
                                        {item?.name}
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
                                        {buyamount} {item.name}
                                    </h1>
                                    <h1 className="font-normal text-sm text-[#464646]">
                                        {" "}
                                        ${dollar}
                                    </h1>
                                </div>
                            </div>
                        ))}
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
                                            src={data._triggertoken.icon}
                                            alt="icon"
                                            className="w-[20px] h-[20px] object-contain rounded-full"
                                        />
                                        <h1 className="font-semibold text-base text-[#464646]">
                                            {data._triggertoken.name}
                                        </h1>
                                    </div>
                                    <h1 className="font-semibold text-base text-[#464646] text-center">
                                        price is {data._triggerprice}
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
                                    {!onetomany ?
                                        (
                                            data._fromToken.map((item, i) => {
                                                <div key={i} className="flex flex-row items-center gap-[5px]">
                                                    <img
                                                        src={item.icon}
                                                        alt="icon"
                                                        className="w-[10px] h-[10px] object-contain rounded-full"
                                                    />
                                                    <h1 className="font-semibold text-base text-[#464646]">
                                                        {item.name}
                                                    </h1>
                                                </div>
                                            })
                                        ) : <>
                                            <div className="flex flex-row items-center gap-[5px]">
                                                <img
                                                    src={data._fromToken.icon}
                                                    alt="icon"
                                                    className="w-[10px] h-[10px] object-contain rounded-full"
                                                />
                                                <h1 className="font-semibold text-base text-[#464646]">
                                                    {data._fromToken.name}
                                                </h1>
                                            </div>
                                        </>
                                    }
                                    <h1 classname="font-semibold text-base flex items-center text-[#464646] w-full">
                                        will be swapped to
                                    </h1>
                                    {/*  tokens which user select */}
                                    {data._toToken.map((item, i) => {
                                        <div key={i} className="flex flex-row items-center gap-[5px]">
                                            <img
                                                src={item.icon}
                                                alt="icon"
                                                className="w-[10px] h-[10px] object-contain rounded-full"
                                            />
                                            <h1 className="font-semibold text-base text-[#464646]">
                                                {item.name}
                                            </h1>
                                        </div>
                                    })}
                                    <h1 classname="font-semibold text-base flex items-center text-[#464646] w-full">
                                        ,at the frequency of ({data._amount}/{data._frequency})
                                    </h1>
                                    {!onetomany ?
                                        (
                                            data._fromToken.map((item, i) => {
                                                <div key={i} className="flex flex-row items-center gap-[5px]">
                                                    <img
                                                        src={item.icon}
                                                        alt="icon"
                                                        className="w-[10px] h-[10px] object-contain rounded-full"
                                                    />
                                                    <h1 className="font-semibold text-base text-[#464646]">
                                                        {item.name}
                                                    </h1>
                                                </div>
                                            })
                                        ) : <>
                                            <div className="flex flex-row items-center gap-[5px]">
                                                <img
                                                    src={data._fromToken.icon}
                                                    alt="icon"
                                                    className="w-[10px] h-[10px] object-contain rounded-full"
                                                />
                                                <h1 className="font-semibold text-base text-[#464646]">
                                                    {data._fromToken.name}
                                                </h1>
                                            </div>
                                        </>
                                    }
                                    <h1 classname="font-semibold text-base flex items-center text-[#464646] w-full">
                                        /{data._time?.name}
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
                            {check === 0 ? (
                                <>
                                    <div className="flex flex-row justify-center items-center gap-2">
                                        <div className="w-9 h-[5px] bg-primary-green rounded-l-sm" />
                                        <div className="w-9 h-[5px] bg-primary-green " />
                                        <div className="w-9 h-[5px] bg-[rgba(16,187,53,0.12)] " />

                                        <div className="w-9 h-[5px] bg-[rgba(16,187,53,0.12)] rounded-r-sm" />
                                    </div>

                                    <div className="flex flex-row justify-center items-center w-full gap-4">
                                        <button
                                            className="bg-[rgba(16,187,53,0.12)] py-[10px] px-[30px]  rounded-lg font-semibold text-base text-[#464646]"
                                            onClick={() => setSchedule(true)}
                                        >
                                            Schedule
                                        </button>
                                        <button
                                            className="bg-primary-green py-[10px] px-[30px]  rounded-lg font-semibold text-base text-white"
                                            onClick={onSubmit}
                                        >
                                            Instant
                                        </button>
                                    </div>
                                </>
                            ) : check === 1 ? (
                                <>
                                    <div className="flex flex-row justify-center items-center gap-2">
                                        <div className="w-9 h-[5px] bg-primary-green rounded-l-sm" />
                                        <div className="w-9 h-[5px] bg-primary-green " />
                                        <div className="w-9 h-[5px] bg-primary-green " />

                                        <div className="w-9 h-[5px] bg-[rgba(16,187,53,0.12)] rounded-r-sm" />
                                    </div>


                                    <div className="flex flex-col justify-center items-center w-full gap-4">

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
                                    </div>

                                </>
                            )
                                : check === 2 ? (
                                    <>
                                        <div className="flex flex-row justify-center items-center gap-2">
                                            <div className="w-9 h-[5px] bg-primary-green rounded-l-sm" />
                                            <div className="w-9 h-[5px] bg-primary-green" />
                                            <div className="w-9 h-[5px] bg-primary-green" />

                                            <div className="w-9 h-[5px] bg-[rgba(16,187,53,0.12)] rounded-r-sm" />
                                        </div>

                                        <div className="flex flex-col justify-center items-center w-full gap-4">

                                            <button className="bg-primary-green flex justify-center items-center gap-2 py-[10px] px-[30px]  rounded-lg font-semibold text-base text-white">
                                                <img
                                                    src="/process.png"
                                                    className="w-[24px] h-[24px] object-contain rounded-full animate-spin "
                                                />
                                                Checking for confirmation
                                            </button>
                                            <h1 className="text-sm text-[#464646] font-normal">
                                                Confirm Stream in Metamask
                                            </h1>
                                        </div>
                                    </>
                                ) : (
                                    <></>
                                )

                            }

                            {/*Button after confirming */}
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center gap-3">
                            <div className="flex flex-row justify-center items-center gap-2">
                                <div className="w-9 h-[5px] bg-primary-green rounded-l-sm" />
                                <div className="w-9 h-[5px] bg-primary-green " />
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
            <Modal
                open={schedule}
                onClose={() => setSchedule(false)}
                title="Schedule"
                width="[28rem]"
            >
                <Schedule />
            </Modal>
        </div>
    );
};

export default Review;
