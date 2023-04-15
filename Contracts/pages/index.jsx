import React, { useState, useEffect, useContext } from "react";

import Review from "../components/Review";
import Main from "../components/Main";
import Complete from "../components/Complete";
import { ethers } from "ethers";

import BulkSwap from "../abis/BulkSwap.json";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { step,
    setStep,
    data,
    setData,
    onExecuteOrder } = useContext(AppContext);

  return (
    <>
      {
        step === 0 ? (
          <Main />
        ) : step === 1 ? (
          <Review />
        ) : step === 2 ? (
          <Complete />
        ) : (
          <div>NOTHING</div>
        )
      }
    </>
  );
};

export default Home;
