import { Tab } from "@headlessui/react";
import React, { useContext, useState } from "react";
import Selecttoken from "./Selecttoken";
import Time from "./Time"

import { AppContext } from "../context/AppContext";
export const times = [
  { id: "hours", name: "Hours", decimals: 3600 },
  { id: "days", name: "Days", decimals: 86400 },
  { id: "weeks", name: "Weeks", decimals: 604800 },
  { id: "months", name: "Months", decimals: 2592000 },
];

export const coins = [
  {
    id: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
    name: "USDC",
    decimals: 6,
    icon: "data:image/png;base64,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",
  },
  {
    id: "0xb809b9B2dc5e93CB863176Ea2D565425B03c0540",
    name: "BUSD",
    decimals: 18,
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX////wuQvwtwDvswD//fjxvB7//vzxvivxvSXvtQD66cT///3yw0byxU310n755rrxvzPywkDzyFnzyV/0zGv0znH21or22JD33J343qP44Kn0y2X11IT55LT657/zxlP77Mz10Hj++vHdFvNoAAAGBUlEQVR4nO3d6VYbMQyGYRJCkhYoXYDSleX+L7LONCHLzHyWlJFl6Vj/2/o5nmQCfie9uCg7i+dl4X+x8Cyu5uvQxOV6Ppuvrq2XoTcb4Gw2/2y9DrVZrjbARPxivRKlud4CwxL3wES8sV6Nwlx/3gNnsw+31uuZfo6AaRefrRc09ZwAE/Gr9ZKmnR4wEb9ZL2rK+dIHJuIv62VNN4PA9HZzb72wqWYEmIgP1kubZm7GgIn4ar24KQYAE/GT9fLOHwhMxN/WCzx3bj9AYCI+Wi/xvMkCE/G79SLPmVt8iW6JT9bLlM8zBeiZSATOZpc/rJcqGzIwEX9aL1YyX+nARPxjvVz+sIAeid94wES8s14yb9jARPxrvWjO/OIDE/Gj9bLpIwJ6It7LgPPVwnrlxLnPfxYdBno5sgkPfGjABqx7XhvQOfBTAzZg3fO7AZ0DH6cHLm5q+iCuAFyua6qndIAV1VPfFYCrmuopNWAtRAVgXfXUkyawhnpKA1hVPaUOtK6nni4nB9ZVT/0oAbSspwoB7eqpn6WAVvVUQaBNPaUBHM3DLOqpwsDy9dSf0sDS9ZQBsGw9ZQIsWU9pADOBX1ninRWwVD1lCCxTT5kCS9RTfzWAnB/BtIkaQEKDekRUrac+2gN16ykVYE31VCVAvbRIA8hoUAsQ39aS5WgA5+s3FeHFQkDUAaqdSvGJzoB8IgQyK+IiQC5RB6h8qsghOtzBzSzJRKdAOhECBR14MSCV6BhII7oGUogQKAzdCwLzRPfA3E1DB6hwH1zcgGIJEEvvoLieSpciiD3GiRgoPBYHwOVKuL+bIkJChEDpowoA2K1TVE91Z3moZxkm6gBzYYMkLdoeVqKeZegdtfgO7tbJJr4flKCepU+0AvLrqYPfQqOe5ZQIgdJnMdB98OBYnFdPHf0GDPUsx0RLIK+eOvn1AupZDom2QE491fvZDfUse6I1kF5PDXzyn4OeZUeEQOnTNAg4cGpMq6cGP1ahnuX/fVEHyD0Wp9RTI2/pqGdZdE22/Q5268zWU6OvF9SzJGIlwHw9BRaDepbFLQBKHxcSAXP1FFyMsGcRAzXqqcyjPaLYo/AOduscvdqyD4YIiBrAbNgwdrURHitg9yzSB77OAo5tBem5CWbPYgQc3gpidc+KPTSAxLChTyQ32wyiIbB/tTGCWHLPIn2iDQKl9RSr+CX2LGLgVOXGIZGZU5J6Fo0dZB6L7682doxHiD0qAO6vNkGrliVKH9mbFLi72kQh0OWLDnDqcmOzFcLSCRIr2cHtOt+uZKUTWIwGUHruf/XW/aca/D+IfuCtCtj9nXyiMyCfCIHSp0oRUHruf/X+d/KIDoE8IgYKG1RtIIfoFEgnFgdKz/1PgVQiBEqfCy4DpBFdAynE4kDpt2gOA/PE8kDhrWcMmCNCoPS54LJATAwBRMQgwHFicaD0WDwHHCMGAg4TQwGHiMGAfSIESh9dR0DpsTgVeEoMCDwmhgQeEoMC98SwwB0RAqVfPoCA0nN/PvA/MTSwI8YG4uctQgDhSL8+AgGl5/51AcFVEQMYfgfBYqTH4g0oGen3Y6DXYAxg+B1UOBZvwAYcmJcGbMC6gRr3waqA0noK7aC03NABCuspT0BRPeULKKin0GuwRiC7noI7KHzj0gUy6ykElJ77awNZ9ZRPIKOe8gok11N+gcR6CgGlh6qlgKR6yjeQUE+h+6AHYLae8r6Dm4H1VAQgrKdiAEE95f81uJuRegrtoPRY3AY4Uk9FAg7WU7GAA/VUNGCvnooHPKmnEFB67m8NPKqnYgIP6il0H/QMfK+nou7gZrp6CgGlx+K1ADtibGDmW2AjAOGEB0pPrBqwlmnABqx8wgOlYUMD1jIN2ICVTwN6B0rrKT9AYT3lCSiqp3wBBfWUNyC7nvIHZNZTHoGsesonkFFPeQWS6ym/QGI95RlIqqd8Awn1lHdgtp7yD8zUUxGAsJ6KAQT1VBTgaD0VBzhST0UCDtZTsYAD9VQ0YK+eigc8qaciAo/qqZjAg3oqKvC9nooL3NZTkYEdMTYwEZ9LA/8BJYCEvOjQ4wsAAAAASUVORK5CYII=",
  },
  {
    id: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844",
    name: "DAI",
    decimals: 18,
    icon: "data:image/png;base64,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",
  },
  {
    id: "0xe802376580c10fe23f027e1e19ed9d54d4c9311e",
    name: "USDT",
    decimals: 6,
    icon: "data:image/jpeg;base64,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",
  },
  {
    id: "0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1",
    name: "TEST",
    decimals: 18,
    icon: "https://www.xdefi.io/wp-content/uploads/2022/05/favicon.png",
  },
];

const Schedule = () => {
  const [time, setTime] = useState([]);
  const [frequency, setFrequency] = useState(0);
  const [token, setToken] = useState({});
  const [triggerprice, setTriggerprice] = useState(0);
  const [tokeninput, setTokeninput] = useState({});
  const [tokeninput1, setTokenInput1] = useState({});
  const [amount, setAmount] = useState(0);

  const { step,
    setStep,
    data,
    setData,
    onExecuteOrder, onExecuteLimitOrder } = useContext(AppContext);

  const [check, setCheck] = useState(0);
  const [txHash, setTxHash] = useState("");

  const onSubmitDCA = async () => {
    setData(
      {
        _from: "",
        _to: "",
        _amount: [],
        _fromToken: [],
        _toToken: [],
        _toChain: "",
        _destinationDomain: "",
        _relayerFee: "",
        _frequency: frequency,
        _time: time,
        _triggerprice: "",
        _triggertoken: [],
      }
    );
  }
  const onSubmitprice = async () => {

    await onExecuteLimitOrder(setCheck, setStep, triggerprice);

    setData(
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
        _triggerprice: triggerprice,
        _triggertoken: token,
      }
    );
  }
  return (
    <div classname="flex flex-col justify-start items-start w-full ">
      <div className="flex flex-col items-center px-[15px] py-[10px] w-full bg-[rgba(16,187,53,0.12)] ">
        <Tab.Group>
          <Tab.List className="flex flex-row justify-start items-center py-[10px] px-[5px] w-full  gap-[12px] bg-white rounded-lg">
            <Tab className="hover:bg-[#10bb35] hover:text-white bg-white rounded-md text-[#464646] font-normal text-sm  py-[10px] px-[10px] flex justify-center items-center">DCA</Tab>
            <Tab className="hover:bg-[#10bb35] hover:text-white bg-white rounded-md text-[#464646] font-normal text-sm  py-[10px] px-[10px] flex justify-center items-center">Price schedule</Tab>
          </Tab.List>
          <Tab.Panels clasName="w-full">
            <Tab.Panel className="flex flex-col items-start p-[15px] gap-[15px]  w-full">
              <div className="flex  justify-start items-center w-full">
                <h1 classname="font-normal text-sm flex items-center text-[#464646] w-full">
                  Split and DCA based on time
                </h1>
              </div>
              <div className="flex flex-row justify-between items-center p-[20px] gap-[15px] bg-white rounded-[10px] w-full">
                <Time
                  options={times}
                  className="flex-[0.5]"
                  placeholder="Select time"
                  width={60}
                  name="time"
                  value={time}
                  onChange={setTime}
                />
                <input
                  type="number"
                  placeholder="Enter total number of cycles"
                  name="Frequency"
                  value={frequency}
                  onChange={(e) => {
                    setFrequency(e.target.value);
                  }}
                  className=" text-[18px] w-[240px] text-[#464646] focus:outline-none  placeholder-shown:text-right text-right py-[10px] px-[10px] justify-end rounded-[8px] flex placeholder-right placeholder-[rgba(70,70,70,0.6)]"
                />
              </div>
              <div className="flex  justify-start items-center w-full gap-[2px]">
                <h1 classname="font-semibold text-sm flex items-center text-[#464646] w-full">
                  {data.amount} </h1>
                {/* {data._fromToken.map((item,i)=>{ */}
                <div className="flex flex-row items-center gap-[5px]">
                  <img
                    src={data._fromToken?.icon}
                    alt="icon"
                    className="w-[10px] h-[10px] object-contain rounded-full"
                  />
                  <h1 className="font-semibold text-sm text-[#464646]">
                    {data._fromToken?.name}
                  </h1>
                </div>
                {/* })} */}
                <h1 classname="font-semibold text-sm flex items-center text-[#464646] w-full">
                  will be swapped to
                </h1>
                {/*  tokens which user select */}
                {data._toToken.map((item, i) => {

                  <div key={i} className="flex flex-row items-center gap-[5px]">
                    <img
                      src={item?.icon}
                      alt="icon"
                      className="w-[10px] h-[10px] object-contain rounded-full"
                    />
                    <h1 className="font-semibold text-sm text-[#464646]">
                      {item?.name}
                    </h1>
                  </div>
                })}
                <h1 classname="font-semibold text-sm flex items-center text-[#464646] w-full">
                  ,at the frequency of ({data._amount}/{data._frequency})
                </h1>
                {/* {data._fromToken.map((item, i) => { */}
                <div className="flex flex-row items-center gap-[5px]">
                  <img
                    src={data._fromToken?.icon}
                    alt="icon"
                    className="w-[10px] h-[10px] object-contain rounded-full"
                  />
                  <h1 className="font-semibold text-sm text-[#464646]">
                    {data._fromToken?.name}
                  </h1>
                </div>
                {/* })} */}
                <h1 classname="font-semibold text-sm flex items-center text-[#464646] w-full">
                  /{data._time?.name}
                </h1>

              </div>

              <div className="flex flex-col items-end gap-[10px] w-full">
                <button
                  onClick={() => {
                    onSubmitDCA();
                  }} className="bg-primary-green py-[10px] px-[30px]  rounded-lg font-semibold text-base text-white">
                  Confirm
                </button>
              </div>
            </Tab.Panel>
            <Tab.Panel className="flex flex-col items-start py-[20px] gap-[15px] h-full w-[435px]">
              <div className="flex  justify-start items-center w-full">
                <h1 classname="font-normal text-sm flex items-center text-[#464646]">
                  Schedule to swap all based on token price.
                </h1>
              </div>
              <div className="flex flex-col justify-between items-center p-[20px] gap-[15px] bg-white rounded-[10px] w-full">
                <div className="flex flex-row justify-end items-center gap-[10px] w-full">
                  <h1 className="font-normal text-sm text-center text-[#637592]">
                    Coin --
                  </h1>
                  {/* <Selecttoken
                    options={coins}
                    className="flex-[0.5]"
                    placeholder="Select token"
                    width={80}
                    name="token"
                    value={token}
                    onChange={setToken}
                  /> */}
                  <div className="px-4 py-3 rounded-md">
                    ETH Price in USD
                  </div>
                </div>
                <input
                  type="number"
                  placeholder="Price in USD to trigger swap"
                  name="triggerprice"
                  value={triggerprice}
                  onChange={(e) => {
                    setTriggerprice(e.target.value);
                  }}
                  className=" text-[18px] w-full border border-[rgba(0,0,0,0.1)]  text-[#464646] focus:outline-none placeholder-shown:text-right text-right py-[10px] px-[10px] justify-end rounded-[8px] flex placeholder-right placeholder-[rgba(70,70,70,0.6)]"
                />
              </div>

              <div className="flex flex-col items-end gap-[10px] w-full">
                {/* <button
                  onClick={() => {
                    onSubmitprice();
                  }}
                  className="bg-primary-green py-[10px] px-[30px]  rounded-lg font-semibold text-base text-white">
                  Confirm
                </button> */}

                <div>
                  {check === 0 && (
                    <button
                      className="bg-primary-green py-[5px] px-[15px] gap-[7px] rounded-md font-semibold text-base text-white"
                      onClick={() => {
                        onSubmitprice();
                      }}
                    >
                      Send
                    </button>
                  )}
                  {check === 1 && (
                    <button className="py-[5px] flex flex-row justify-center items-center  px-[15px] gap-[7px] rounded-md font-medium text-xs text-[#464646]">
                      <img
                        src="/loading.png"
                        className="w-[24px] h-[24px] object-contain rounded-full animate-spin "
                      />
                      confirm in wallet
                    </button>

                  )}
                  {
                    check === 2 && (
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
                  {check === 3 && (
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
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Schedule;
