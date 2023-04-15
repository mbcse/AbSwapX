import { ethers } from "ethers";
import React, { useState } from "react";
import BulkSwap from "../abis/BulkSwap.json";
import axios from 'axios';
import { parseEther } from "ethers/lib/utils.js";


export const AppContext = React.createContext();

//create provider
export const AppProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);


  const [data, setData] = useState(
    {
      _from: "",
      _to: "",
      _amount: [],
      _fromToken: [],
      _toToken: [],
      _toChain: "",
      _destinationDomain: "",
      _relayerFee: "",
      _frequency:"",
      _time:[],
      _triggerprice:"",
      _triggertoken:[],
    }
  );

  const fetchRelayerFees = async () => {
    try {

      let data = JSON.stringify({
        "originDomain": "1735353714",
        "destinationDomain": "9991"
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://connext-realyer.onrender.com',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      // return "0.030762895441354";
      let res = await axios.request(config);
      res = JSON.stringify(res.data)
      console.log("***", res);
      return res;

    }
    catch (error) {
      console.error(error);
    }
  }

  console.log({ data });
  const onExecuteOrder = async (setCheck, setStep) => {
    // e.preventDefault();

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        "0xD81F22FfD56Eb0B6074f73C8Ed7F54A173a692A0",
        BulkSwap.abi,
        signer
      )
      // const rFee = await fetchRelayerFees();


      setCheck(1);
      const tx = await contract.executeOrder(
        data._from,
        data._to,
        data._amount,
        data._fromToken.id,
        data._toToken.id,
        data._toChain.id,
        data._destinationDomain,
        "107087320435826",
        { value: "107087320435826" }
      );

      setCheck(2);
      await tx.wait();
      setStep(2);

    } catch (error) {
      setCheck(0);
      console.error(error);
    }

  }

  const context = {
    visible,
    setVisible,
    loading,
    setLoading,
    step,
    setStep,
    data,
    setData,
    onExecuteOrder
  };

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}