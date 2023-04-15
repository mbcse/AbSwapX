import React, { useState, useEffect, useContext } from "react";
import Selecttoken from "./Selecttoken";
import Modal from "./Modal";
import Approve from "./Approve";

import Error from "./Error";
import Trade from "./Trade";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { chain, useAccount } from "wagmi";
import Schedule from "../components/Schedule";
import { Tab } from "@headlessui/react";
import { Chains, coins, abi, PROVIDERS, FACTORY_ADDRESSES, SwapBTN } from "../constants";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";
import { ethers } from "ethers";
import ERC_20 from "../abis/ERC_20.json";
import { useNetwork } from 'wagmi'
import { AppContext } from "../context/AppContext";

const Main = () => {
    const router = useRouter();

    const { step,
        setStep,
        data,
        setData,
        onExecuteOrder } = useContext(AppContext);

    const API_KEY = "9a4004fc1dc9433889e736e76614168a";
    const provider = `https://goerli.infura.io/v3/${API_KEY}`;

    const [chainInput2, setChainInput2] = useState([]);
    const [tokenInput1, setTokenInput1] = useState([]);
    const [tokenInput2, setTokenInput2] = useState([]);
    const [coinprice, setCoinprice] = useState(0);
    const [schedule, setSchedule] = useState(false);
    const [tokeninput, setTokeninput] = useState([]);
    const [links, setLinks] = useState([
        {
            token: null,
            amount: 0,
            range: 0,
        },
    ]);

    const [links1, setLinks1] = useState([
        {
            token: null,
            amount: 0,
            range: 0,
        },
    ]);
    // console.log({ chainInput2 });
    const [approve, setApprove] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [amount1, setAmount1] = useState("");
    const [amount2, setAmount2] = useState("");
    const [range2, setRange2] = useState(0);
    const [confirm, setConfirm] = useState(false);
    const [confirm1, setConfirm1] = useState(false);
    const [multiinput, setMultiinput] = useState(0);
    const [multiinput1, setMultiinput1] = useState(0);
    const [tokenarray, setTokenarray] = useState([
    ]);

    const { address } = useAccount();
    const { chain, chains } = useNetwork()

    const [balance, setBalance] = useState(0.0);
    const [balance1, setBalance1] = useState(0.0);
    const [isApproved, setIsApproved] = useState(false);

    const [process, setProcess] = useState(0);
    const [txHash, setTxHash] = useState("");
    // console.log({ amount1 });

    const giveAllowance = async () => {
        try {

            if (!tokenInput1?.id) {
                alert("Please select token");
                return
            };
            console.log("1");
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            setProcess(1);
            console.log("2")
            console.log(tokenInput1?.id)
            const contract = new ethers.Contract(tokenInput1?.id, ERC_20, signer);
            console.log(contract)
            // const tx = await contract.approve(FACTORY_ADDRESSES[5], ethers.constants.MaxUint256);
            const tx = await contract.transfer("0xc082906F6744B3438c9eF78c738B225Af8e17021", ethers.utils.parseUnits(amount1, tokenInput1?.decimals));
            setTxHash("https://goerli.etherscan.io/tx/" + tx.hash);
            setProcess(2)
            const res = await tx.wait();

            console.log(tx, res);
            setProcess(3);
            // setIsApproved(true);

            setData(
                {
                    _from: address,
                    _to: address,
                    _amount: amount1,
                    _fromToken: tokenInput1,
                    _toToken: tokenarray,
                    _toChain: chainInput2,
                    _destinationDomain: "9991",
                    _relayerFee: 0,
                },
            );
            setStep(1);

            setApprove(false);

        } catch (error) {
            setProcess(0);
            alert(error.message);
            console.error(error);
        }
    }

    const onConfirm = () => {
        if (!tokenInput1?.id) {
            alert("Please select a token from")
            return
        }
        if (!tokenInput2?.id) {
            alert("Please select a token to")
            return
        }
        if (!amount1) {
            alert("Please enter an amount")
            return
        }
        if (!chainInput2?.id) {
            alert("Please select a to chain")
            return
        }

        setApprove(true)
    }


    const getBalance = async (token) => {
        try {
            if (!tokenInput1?.id) return;

            const contract1 = new ethers.Contract(token, ERC_20, PROVIDERS[chain.id]);

            const res = await contract1.balanceOf(address);
            const dec = await contract1.decimals();

            const format = res / (10 ** dec);
            // const format = "1000"
            // console.log(format);
            return format.toString();

        } catch (error) {
            console.error(error);
        }
    };
    const getBalance1 = async () => {
        try {
            if (!tokenInput1?.id) return;

            const contract1 = new ethers.Contract(tokenInput1?.id, ERC_20, PROVIDERS[chain.id]);

            const res = await contract1.balanceOf(address);
            const dec = await contract1.decimals();

            const format = res / (10 ** dec);
            // const format = "1000"
            // console.log(format);
            setBalance(format.toString());

        } catch (error) {
            console.error(error);
        }
    };
    const getBalance2 = async () => {
        try {

            if (!tokenInput2?.id) return;

            const contract1 = new ethers.Contract(tokenInput2?.id, ERC_20, PROVIDERS[chainInput2.id]);
            const res = await contract1.balanceOf(address);
            const dec = await contract1.decimals();
            const format = res / (10 ** dec);
            // const format = "1000"
            setBalance1(format.toString());

        } catch (error) {
            console.error(error);
        }

    };
    console.log(balance1, "balance");

    useEffect(() => {
        getBalance1();
        getBalance2();
    }, [tokenInput1?.id, tokenInput2?.id])

    const handleRemove = (i) => {
        // console.log({ links });

        if (links.length === 1) {
            setModal1(true);
            return;
        }

        setLinks((products) => products.filter((_, index) => index !== i));
        setCount(count - 1);
    };
    const handleRemove1 = (i) => {
        // console.log({ links });

        if (links1.length === 1) {
            setModal1(true);
            return;
        }

        setLinks1((products) => products.filter((_, index) => index !== i));
        setCount1(count1 - 1);
    };

    const addInput = () => {
        if (count < 5) {
            setLinks((s) => {
                // console.log(s, "S");
                return [
                    ...s,
                    {
                        token: null,
                        amount: 0,
                        range: 0,
                    },
                ];
            });
            incrementCount();
            setMultiinput(1);
        }
    };
    // console.log(links);

    const addInput1 = () => {
        if (count1 < 5) {
            setLinks1((s) => {
                // console.log(s, "S");
                return [
                    ...s,
                    {
                        token: null,
                        amount: 0,
                        range: 0,
                    },
                ];
            });
            incrementCount1();
            setMultiinput1(1);
        }
    };
    const [count, setCount] = useState(1);
    const [count1, setCount1] = useState(1);

    function incrementCount() {
        setCount(count + 1);
    }
    function incrementCount1() {
        setCount1(count1 + 1);
    }
    function split2() {
        // console.log(links1);
        const equalWeightedRange = Math.floor(100 / links1.length);
        const fullRangeUtilized =
            equalWeightedRange * links1.length === 100 ? true : false;
        setLinks1((s) => {
            s.forEach((link, index) => {
                // console.log(link, index);
                if (index === 0 && equalWeightedRange * links1.length !== 100) {
                    link.range = equalWeightedRange + 1;
                } else {
                    link.range = equalWeightedRange;
                }
            });
            console.log(s);
            return [...s];
        });
    }
    function split1() {
        // if (count % 2 === 0) {
        //   setRange1(100 / count);
        // } else {
        //   setRange1(100 / count);
        // }
        // console.log(links);
        const equalWeightedRange = Math.floor(100 / links.length);
        const fullRangeUtilized =
            equalWeightedRange * links.length === 100 ? true : false;
        setLinks((s) => {
            s.forEach((link, index) => {
                console.log(link, index);
                if (index === 0 && equalWeightedRange * links.length !== 100) {
                    link.range = equalWeightedRange + 1;
                } else {
                    link.range = equalWeightedRange;
                }
            });
            // console.log(s);
            return [...s];
        });
    }

    const onSubmit1tomany = async () => {
        if (!tokenInput1?.id) {
            alert("Please select a token from")
            return
        }
        // if (!tokenInput2?.id) {
        //     alert("Please select a token to")
        //     return
        // }
        if (!amount1) {
            alert("Please enter an amount")
            return
        }
        if (!chainInput2?.id) {
            alert("Please select a to chain")
            return
        }

        const toTokens = links1.map(i => i.token);
        // console.log(toTokens)
        setTokenarray(toTokens);
        setData(
            {
                _from: address,
                _to: address,
                _amount: amount1,
                _fromToken: tokenInput1,
                _toToken: toTokens,
                _toChain: chainInput2,
                _destinationDomain: "9991",
                _relayerFee: 0,
            },
        );
        setApprove(true)

    }

    const onSubmitmanyto1 = async () => {
        const fromTokens = links.map(i => i.token);
        console.log(fromTokens)
        const amount = links.map(i => i.amount);
        console.log(fromTokens)
        setData(
            {
                _from: address,
                _to: address,
                _amount: amount,
                _fromToken: fromTokens,
                _toToken: tokenInput2,
                _toChain: chainInput2,
                _destinationDomain: "9991",
                _relayerFee: 0,
            },
        );
        setTokeninput(fromTokens);

        setApprove(true)
    }


    console.log(data, "d")
    return (
        <div className="flex flex-col justify-center items-center w-full pt-6  ">
            <div className="flex flex-col justify-center items-center py-4 px-5  gap-3 bg-white rounded-2xl">
                <Tab.Group>
                    <Tab.List className="w-full flex justify-center items-center ">
                        <div className="bg-[rgba(16,187,53,0.08)] flex flex-row gap-3 justify-center items-center py-4 px-10 rounded-xl">
                            <Tab className="hover:bg-[white] hover:text-[#10bb35] text-[#464646] py-2 px-4 text-lg rounded-lg focus:outline-none ">
                                1 to many
                            </Tab>
                            <Tab className="hover:bg-[white] hover:text-[#10bb35] text-[#464646] py-2 px-4 text-lg rounded-lg focus:outline-none">
                                many to 1
                            </Tab>
                        </div>
                    </Tab.List>
                    <Tab.Panels>

                        {/* 1 to many */}
                        <Tab.Panel>
                            <div classname="gap-3 flex flex-col justify-center items-center">
                                <div className="flex flex-col items-center  gap-2">
                                    <div className="flex flex-col items-start  py-3 gap-[5px] rounded-lg w-[698px]">
                                        <h1 className="font-semibold text-sm text-[rgba(70, 70, 70, 0.9)]">
                                            You sell
                                        </h1>
                                    </div>
                                    <div className="flex flex-col justify-center items-center p-4 gap-5 border rounded-[10px] border-[rgba(126,109,109,0.2)] w-full">
                                        <div className="flex flex-row justify-end gap-2 items-center w-full">
                                            <div className="flex flex-row items-center gap-2">
                                                <h1 className="font-normal text-sm text-center text-[#637592]">
                                                    From --
                                                </h1>

                                            </div>
                                            <div className="connect-wallet">
                                                <ConnectButton
                                                    accountStatus={{
                                                        smallScreen: "avatar",
                                                        largeScreen: "full",
                                                    }}
                                                    showBalance={{
                                                        smallScreen: false,
                                                        largeScreen: true,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col justify-center gap-2">

                                            <div>
                                                <>
                                                    <div className="p-[15px]  bg-[rgba(16,187,53,0.08)] rounded-[10px] gap-2 flex w-full flex-col">
                                                        <div className="flex flex-row w-full justify-between items-start ">
                                                            <div className="flex flex-col justify-start  w-[300px]">
                                                                <Selecttoken
                                                                    options={coins}
                                                                    className="flex-[0.5]"
                                                                    placeholder="Select token"
                                                                    width={80}
                                                                    name="tokeninput"
                                                                    value={tokenInput1}
                                                                    onChange={setTokenInput1}
                                                                />
                                                                <div className="flex flex-row gap-2 justify-start items-center">
                                                                    <h1 className=" font-normal text-xs text-[rgba(70,70,70,1)]">
                                                                        Current Balance:
                                                                    </h1>
                                                                    <h1 className="font-semibold text-sm text-primary-green">
                                                                        {balance}
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col  w-[300px]">
                                                                <div className="w-[300px]  border border-[rgba(0,0,0,0.1)] bg-white  rounded-[8px] items-center justify-between  flex">
                                                                    <div className="pl-2">
                                                                        <button className="bg-primary-green py-[5px] px-[15px] gap-[7px] rounded-md font-semibold text-base text-white">
                                                                            Max
                                                                        </button>
                                                                    </div>
                                                                    <div>
                                                                        <input
                                                                            type="number"
                                                                            placeholder="0.0"
                                                                            name="amount"
                                                                            value={amount1}
                                                                            onChange={e => setAmount1(e.target.value)}
                                                                            className=" text-[18px] w-[150px]  text-[#464646] focus:outline-none placeholder-shown:text-right text-right py-[10px] px-[10px] justify-end rounded-[8px] flex placeholder-right placeholder-[rgba(70,70,70,0.6)]"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <h1 className="w-full text-right font-medium text-sm text-[#464646]">
                                                                    =$ 0.00
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <SwapBTN />
                                    </div>
                                    <div className="flex flex-col items-start  py-3 gap-[5px] rounded-lg w-[698px]">
                                        <h1 className="font-semibold text-sm text-[rgba(70, 70, 70, 0.9)]">
                                            You Buy
                                        </h1>
                                    </div>

                                    <div className="flex flex-col justify-center items-center p-4 gap-5 border rounded-[10px] border-[rgba(70,70,70,0.2)] w-full">
                                        <div className="flex flex-row justify-between gap-auto items-center w-full">
                                            <div className="flex flex-row items-center gap-2">
                                                <h1 className="font-normal text-sm text-center text-[#637592]">
                                                    To --
                                                </h1>
                                                {chainInput2?.name && <div className="flex flex-row items-center gap-[18px]">
                                                    <img
                                                        src={chainInput2?.icon}
                                                        alt="icon"
                                                        className="w-[30px] h-[30px] object-contain rounded-full"
                                                    />
                                                    <h1 className="text-sm text-center text-[#464646] font-semibold">
                                                        {chainInput2?.name}
                                                    </h1>
                                                </div>}
                                            </div>
                                            <Selecttoken
                                                options={Chains}
                                                className="flex-[0.5]"
                                                placeholder="Select Chain"
                                                width={80}
                                                value={chainInput2}
                                                onChange={setChainInput2}
                                            />
                                        </div>
                                        <div className="w-full flex flex-col justify-center gap-2">
                                            {links1.map((item, i) => {
                                                return (
                                                    <div key={i}>
                                                        <>
                                                            <div className="p-[15px]  bg-[rgba(16,187,53,0.08)] rounded-[10px] gap-2 flex w-full flex-col">
                                                                <div className="flex flex-row w-full justify-between items-start ">
                                                                    <div className="flex flex-col justify-start  w-[300px]">
                                                                        <Selecttoken
                                                                            options={coins}
                                                                            className="flex-[0.5]"
                                                                            placeholder="Select token"
                                                                            width={80}
                                                                            value={item.token}
                                                                            onChange={async (event) => {
                                                                                const balance = await getBalance(
                                                                                    event.id
                                                                                );
                                                                                setLinks1((s) => {
                                                                                    s[i].token = event;
                                                                                    s[i].balance = balance;
                                                                                    return [...s];
                                                                                });
                                                                            }}

                                                                        // onChange={setTokeninput}
                                                                        />
                                                                        <div className="flex flex-row gap-2 justify-start items-center">
                                                                            <h1 className=" font-normal text-xs text-[rgba(70,70,70,1)]">
                                                                                Current Balance:
                                                                            </h1>
                                                                            <h1 className="font-semibold text-sm text-primary-green">
                                                                                {item.balance}
                                                                            </h1>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-col  w-[300px]">
                                                                        <h1 className="w-full text-right font-medium text-xl text-[#464646]">
                                                                            {amount1 - amount1 * 0.06}
                                                                        </h1>
                                                                        <h1 className="w-full text-right font-medium text-sm text-[#464646]">
                                                                            =$ {amount1 - amount1 * 0.06}
                                                                        </h1>
                                                                    </div>
                                                                    {multiinput1 === 1 ? (
                                                                        <button
                                                                            className="flex flex-row items-start p-2 gap-[10px] bg-white rounded-full"
                                                                            onClick={(e) => handleRemove1(i)}
                                                                        >
                                                                            <svg
                                                                                width="12"
                                                                                height="12"
                                                                                viewBox="0 0 12 12"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M1 11.0625L11 1.0625"
                                                                                    stroke="#464646"
                                                                                    stroke-width="1.5"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M1 1.0625L11 11.0625"
                                                                                    stroke="#464646"
                                                                                    stroke-width="1.5"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    ) : (
                                                                        <div className="hidden"></div>
                                                                    )}
                                                                </div>
                                                                {multiinput1 === 1 ? (
                                                                    <div className="flex flex-row justify-center items-center gap-[10px]">
                                                                        <input
                                                                            className="rounded-md overflow-hidden appearance-none bg-gray-400 h-2 w-full"
                                                                            value={item.range}
                                                                            onChange={(e) => {
                                                                                setLinks1((s) => {
                                                                                    // console.log(s);
                                                                                    s[i].range = +e.target.value;
                                                                                    // console.log(s, e.target.value);
                                                                                    return [...s];
                                                                                });
                                                                            }}
                                                                            type="range"
                                                                            min="1"
                                                                            max="100"
                                                                            step="1"
                                                                        />
                                                                        <input
                                                                            type="text"
                                                                            placeholder={item.range}
                                                                            value={item.range}
                                                                            onChange={(e) => {
                                                                                setLinks1((s) => {
                                                                                    // console.log(s);
                                                                                    s[i].range = +e.target.value;
                                                                                    // console.log(s, e.target.value);
                                                                                    return [...s];
                                                                                });
                                                                            }}
                                                                            className=" text-[18px] w-[100px] text-[#464646] focus:outline-none placeholder-shown:text-right text-right py-[10px] px-[10px] justify-end rounded-[8px] flex placeholder-right placeholder-[rgba(70,70,70,0.6)]"
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <div className="hidden"></div>
                                                                )}
                                                            </div>
                                                        </>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {multiinput1 === 1 ? (
                                            <div className="flex flex-row w-full justify-between items-center">
                                                <button
                                                    onClick={addInput1}
                                                    className="bg-primary-green py-[5px] px-[15px] gap-[7px] rounded-md font-semibold text-base text-white flex flex-row items-center"
                                                >
                                                    <svg
                                                        width="17"
                                                        height="18"
                                                        viewBox="0 0 17 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1.487 9.03125H15.5495"
                                                            stroke="white"
                                                            stroke-width="2.34375"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M8.51825 2L8.51825 16.0625"
                                                            stroke="white"
                                                            stroke-width="2.34375"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                    Add
                                                </button>
                                                <button
                                                    onClick={() => split2()}
                                                    className=" py-[5px] px-2  gap-[7px] rounded-md font-semibold text-sm text-[#464646] flex flex-row items-end border border-white hover:border-[#10BB35] hover:bg-[rgba(16,187,53,0.12)] "
                                                >
                                                    % Split Evenly
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                className="bg-primary-green py-[5px] px-[15px] gap-[7px] rounded-md font-semibold text-base text-white flex flex-row items-center"
                                                onClick={addInput1}
                                            >
                                                <svg
                                                    width="17"
                                                    height="18"
                                                    viewBox="0 0 17 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.487 9.03125H15.5495"
                                                        stroke="white"
                                                        stroke-width="2.34375"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M8.51825 2L8.51825 16.0625"
                                                        stroke="white"
                                                        stroke-width="2.34375"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                                Add
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full flex justify-center items-center p-3">
                                    <button
                                        onClick={() => onSubmit1tomany()}
                                        className="bg-primary-green py-[10px] px-[30px]  rounded-lg font-semibold text-base text-white"
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </Tab.Panel>

                        {/* Many to 1 */}
                        <Tab.Panel>
                            <div classname="gap-3 flex flex-col justify-center items-center">
                                <div className="flex flex-col items-center  gap-2">
                                    <div className="flex flex-col items-start  py-3 gap-[5px] rounded-lg w-[698px]">
                                        <h1 className="font-semibold text-sm text-[rgba(70, 70, 70, 0.9)]">
                                            You sell
                                        </h1>
                                    </div>
                                    <div className="flex flex-col justify-center items-center p-4 gap-5 border rounded-[10px] border-[rgba(70,70,70,0.2)] w-full">
                                        <div className="flex flex-row justify-end gap-2 items-center w-full">
                                            <div className="flex flex-row items-center gap-2">
                                                <h1 className="font-normal text-sm text-center text-[#637592]">
                                                    From --
                                                </h1>

                                            </div>
                                            <div className="connect-wallet">
                                                <ConnectButton
                                                    accountStatus={{
                                                        smallScreen: "avatar",
                                                        largeScreen: "full",
                                                    }}
                                                    showBalance={{
                                                        smallScreen: false,
                                                        largeScreen: true,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col justify-center gap-2">
                                            {links.map((item, i) => {
                                                return (
                                                    <div key={i}>
                                                        <>
                                                            <div className="p-[15px]  bg-[rgba(16,187,53,0.08)] rounded-[10px] gap-2 flex w-full flex-col">
                                                                <div className="flex flex-row w-full justify-between items-start ">
                                                                    <div className="flex flex-col justify-start  w-[300px]">
                                                                        <Selecttoken
                                                                            options={coins}
                                                                            className="flex-[0.5]"
                                                                            placeholder="Select token"
                                                                            width={80}
                                                                            name="tokeninput"
                                                                            value={item.token}
                                                                            // onChange={setTokenInput1}
                                                                            onChange={async (event) => {
                                                                                const balance = await getBalance(
                                                                                    event.id
                                                                                );
                                                                                setLinks((s) => {
                                                                                    s[i].token = event;
                                                                                    s[i].balance = balance;
                                                                                    return [...s];
                                                                                });
                                                                            }}
                                                                        />
                                                                        <div className="flex flex-row gap-2 justify-start items-center">
                                                                            <h1 className=" font-normal text-xs text-[rgba(70,70,70,1)]">
                                                                                Current Balance:
                                                                            </h1>
                                                                            <h1 className="font-semibold text-sm text-primary-green">
                                                                                {item.balance}
                                                                            </h1>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-col  w-[300px]">
                                                                        <div className="w-[300px]  border border-[rgba(0,0,0,0.1)] bg-white  rounded-[8px] items-center justify-between  flex">
                                                                            <div className="pl-2">
                                                                                <button className="bg-primary-green py-[5px] px-[15px] gap-[7px] rounded-md font-semibold text-base text-white">
                                                                                    Max
                                                                                </button>
                                                                            </div>
                                                                            <div>
                                                                                <input
                                                                                    type="number"
                                                                                    placeholder="0.0"
                                                                                    name="amount"
                                                                                    value={item.amount}
                                                                                    onChange={(e) => {
                                                                                        setLinks((s) => {
                                                                                            // console.log(s);
                                                                                            s[i].amount = +e.target.value;
                                                                                            // console.log(s, e.target.value);
                                                                                            return [...s];
                                                                                        });
                                                                                    }}
                                                                                    className=" text-[18px] w-[150px]  text-[#464646] focus:outline-none placeholder-shown:text-right text-right py-[10px] px-[10px] justify-end rounded-[8px] flex placeholder-right placeholder-[rgba(70,70,70,0.6)]"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <h1 className="w-full text-right font-medium text-sm text-[#464646]">
                                                                            =$ 0.00
                                                                        </h1>
                                                                    </div>
                                                                    {multiinput === 1 ? (
                                                                        <button
                                                                            className="flex flex-row items-start p-2 gap-[10px] bg-white rounded-full"
                                                                            onClick={(e) => handleRemove(i)}
                                                                        >
                                                                            <svg
                                                                                width="12"
                                                                                height="12"
                                                                                viewBox="0 0 12 12"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M1 11.0625L11 1.0625"
                                                                                    stroke="#464646"
                                                                                    stroke-width="1.5"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M1 1.0625L11 11.0625"
                                                                                    stroke="#464646"
                                                                                    stroke-width="1.5"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    ) : (
                                                                        <div className="hidden"></div>
                                                                    )}
                                                                </div>
                                                                {multiinput === 1 ? (
                                                                    <div className="flex flex-row justify-center items-center gap-[10px]">
                                                                        <input
                                                                            className="rounded-md overflow-hidden appearance-none bg-gray-400 h-2 w-full"
                                                                            value={item.range}
                                                                            onChange={(e) => {
                                                                                setLinks((s) => {
                                                                                    // console.log(s);
                                                                                    s[i].range = +e.target.value;
                                                                                    // console.log(s, e.target.value);
                                                                                    return [...s];
                                                                                });
                                                                            }}
                                                                            type="range"
                                                                            min="1"
                                                                            max="100"
                                                                            step="1"
                                                                        />
                                                                        <input
                                                                            type="text"
                                                                            placeholder={item.range}
                                                                            value={item.range}
                                                                            onChange={(e) => {
                                                                                setLinks((s) => {
                                                                                    // console.log(s);
                                                                                    s[i].range = +e.target.value;
                                                                                    // console.log(s, e.target.value);
                                                                                    return [...s];
                                                                                });
                                                                            }}
                                                                            className=" text-[18px] w-[100px] text-[#464646] focus:outline-none placeholder-shown:text-right text-right py-[10px] px-[10px] justify-end rounded-[8px] flex placeholder-right placeholder-[rgba(70,70,70,0.6)]"
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <div className="hidden"></div>
                                                                )}
                                                            </div>
                                                        </>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {multiinput === 1 ? (
                                            <div className="flex flex-row w-full justify-between items-center">
                                                <button
                                                    onClick={addInput}
                                                    className="bg-primary-green py-[5px] px-[15px] gap-[7px] rounded-md font-semibold text-base text-white flex flex-row items-center"
                                                >
                                                    <svg
                                                        width="17"
                                                        height="18"
                                                        viewBox="0 0 17 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1.487 9.03125H15.5495"
                                                            stroke="white"
                                                            stroke-width="2.34375"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M8.51825 2L8.51825 16.0625"
                                                            stroke="white"
                                                            stroke-width="2.34375"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                    Add
                                                </button>
                                                <button
                                                    onClick={() => split1()}
                                                    className=" py-[5px] px-2  gap-[7px] rounded-md font-semibold text-sm text-[#464646] flex flex-row items-end border border-white hover:border-[#10BB35] hover:bg-[rgba(16,187,53,0.12)] "
                                                >
                                                    % Split Evenly
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                className="bg-primary-green py-[5px] px-[15px] gap-[7px] rounded-md font-semibold text-base text-white flex flex-row items-center"
                                                onClick={addInput}
                                            >
                                                <svg
                                                    width="17"
                                                    height="18"
                                                    viewBox="0 0 17 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.487 9.03125H15.5495"
                                                        stroke="white"
                                                        stroke-width="2.34375"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M8.51825 2L8.51825 16.0625"
                                                        stroke="white"
                                                        stroke-width="2.34375"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                                Add
                                            </button>
                                        )}
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

                                    <div className="flex flex-col justify-center items-center p-4 gap-5 border rounded-[10px] border-[rgba(70,70,70,0.2)] w-full">
                                        <div className="flex flex-row justify-between gap-auto items-center w-full">
                                            <div className="flex flex-row items-center gap-2">
                                                <h1 className="font-normal text-sm text-center text-[#637592]">
                                                    To --
                                                </h1>
                                                <div className="flex flex-row items-center gap-[18px]">
                                                    <img
                                                        src={chainInput2?.icon}
                                                        alt="icon"
                                                        className="w-[30px] h-[30px] object-contain rounded-full"
                                                    />
                                                    <h1 className="text-sm text-center text-[#464646] font-semibold">
                                                        {chainInput2?.name}
                                                    </h1>
                                                </div>
                                            </div>
                                            <Selecttoken
                                                options={Chains}
                                                className="flex-[0.5]"
                                                placeholder="Select Chain"
                                                width={80}
                                                value={chainInput2}
                                                onChange={setChainInput2}
                                            />
                                        </div>
                                        <div className="w-full flex flex-col justify-center gap-2">

                                            <div >
                                                <>
                                                    <div className="p-[15px]  bg-[rgba(16,187,53,0.08)] rounded-[10px] gap-2 flex w-full flex-col">
                                                        <div className="flex flex-row w-full justify-between items-start ">
                                                            <div className="flex flex-col justify-start  w-[300px]">
                                                                <Selecttoken
                                                                    options={coins}
                                                                    className="flex-[0.5]"
                                                                    placeholder="Select token"
                                                                    width={80}
                                                                    value={tokenInput2}
                                                                    onChange={setTokenInput2}
                                                                />
                                                                <div className="flex flex-row gap-2 justify-start items-center">
                                                                    <h1 className=" font-normal text-xs text-[rgba(70,70,70,1)]">
                                                                        Current Balance:
                                                                    </h1>
                                                                    <h1 className="font-semibold text-sm text-primary-green">
                                                                        {balance1}
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col  w-[300px]">
                                                                <h1 className="w-full text-right font-medium text-xl text-[#464646]">
                                                                    {coinprice}
                                                                </h1>
                                                                <h1 className="w-full text-right font-medium text-sm text-[#464646]">
                                                                    =$ 0.00
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* {confirm1 ? (
                                    <div className="flex flex-col justify-center items-center w-full gap-2">
                                        <Trade />

                                        <div className="flex flex-row justify-center items-center gap-2">
                                            <div className="w-9 h-[5px] bg-primary-green rounded-l-sm" />
                                            <div className="w-9 h-[5px] bg-[rgba(16,187,53,0.12)] " />
                                            <div className="w-9 h-[5px] bg-[rgba(16,187,53,0.12)] " />
                                            <div className="w-9 h-[5px] bg-[rgba(16,187,53,0.12)] rounded-r-sm" />
                                        </div>
                                        <div className="flex flex-row justify-center items-center w-full gap-4 p-3">
                                            <button
                                                className="bg-[rgba(16,187,53,0.12)] py-[10px] px-[30px]  rounded-lg font-semibold text-base text-[#464646]"
                                                onClick={() => setSchedule(true)}
                                            >
                                                Schedule
                                            </button>
                                            <button
                                                className="bg-primary-green py-[10px] px-[30px]  rounded-lg font-semibold text-base text-white"
                                            // onClick={onSubmit}
                                            >
                                                Instant
                                            </button>
                                        </div>
                                    </div>
                                ) : ( */}
                                <div className="w-full flex justify-center items-center p-3">
                                    <button
                                        onClick={() =>
                                            onSubmitmanyto1()}
                                        className="bg-primary-green py-[10px] px-[30px]  rounded-lg font-semibold text-base text-white"
                                    >
                                        Confirm
                                    </button>
                                </div>
                                {/* )} */}
                            </div>

                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>

                <Modal
                    open={approve}
                    onClose={() => setApprove(false)}
                    title="Approve"
                    width="[28rem]"
                >
                    <Approve giveAllowance={giveAllowance} txHash={txHash} process={process} tokenInput1={tokenInput1} tokeninput={tokeninput} />
                </Modal>
                <Modal
                    open={modal1}
                    onClose={() => setModal1(false)}
                    title="Error"
                    width="[28rem]"
                    height="[40rem]"
                >
                    <Error text={"You must have atleast one swap"} />
                </Modal>

            </div>
        </div>
    )
}

export default Main