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
      _frequency: "",
      _time: [],
      _triggerprice: "",
      _triggertoken: [],
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
    console.log("111")

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        "0xc082906F6744B3438c9eF78c738B225Af8e17021",
        BulkSwap,
        signer
      )
      // const rFee = await fetchRelayerFees();
      console.log("***", data._from,
        data._to,
        data._amount,
        data._fromToken.id,
        data._toToken[0].id,
        data._toChain.id,
        data._destinationDomain,
        "1622849608341748",)


      setCheck(1);
      const tx = await contract.executeOrder(
        data._from,
        data._to,
        data._amount,
        data._fromToken.id,
        data._toToken[0].id,
        data._toChain.id,
        data._destinationDomain,
        "1622849608341748",
        "0xaa3E5FA2DcB475752AC1fbE86769201A1e30b29B",
        { value: "1622849608341748" }
      );

      setCheck(2);
      await tx.wait();
      setStep(2);

    } catch (error) {
      alert(error.message);
      setCheck(0);
      setStep(0);
      console.error(error);
    }

  }

  const onExecuteLimitOrder = async (setCheck, setStep, triggerprice) => {
    // e.preventDefault();

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        "0xc082906F6744B3438c9eF78c738B225Af8e17021",
        BulkSwap,
        signer
      )
      // const rFee = await fetchRelayerFees();

      console.log("***",
        data._from,
        data._to,
        data._amount,
        triggerprice,
        data._fromToken.id,
        data._toToken[0].id,
        data._toChain.id,
        "6778479",
        "1622849608341748",
        "0xaa3E5FA2DcB475752AC1fbE86769201A1e30b29B",
      )



      setCheck(1);
      const tx = await contract.createDeposit(
        data._from,
        data._to,
        data._amount,
        triggerprice,
        data._fromToken.id,
        data._toToken[0].id,
        data._toChain.id,
        "6778479",
        "1622849608341748",
        "0xaa3E5FA2DcB475752AC1fbE86769201A1e30b29B",
        { value: "1622849608341748" }
      );

      setCheck(2);
      await tx.wait();
      setStep(0);

    } catch (error) {
      alert(error.message);
      setCheck(0);
      setStep(0);
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
    onExecuteOrder,
    onExecuteLimitOrder
  };

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}