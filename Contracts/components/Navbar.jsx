import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { getEllipsisTxt } from "../utils/crypto";

import { useAccount, useConnect, useEnsName } from "wagmi";
import { useNetwork } from "wagmi";
import { useSwitchNetwork } from "wagmi";
import logo from "../public/logo.png";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ConnectWalletCustom from "./ConnectWalletCustom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const { visible, setVisible } = useContext(AppContext);

  const { chain, chains } = useNetwork();
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors } = useConnect();
  const { error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  return (
    <nav
      id="header"
      className="flex w-[100%] flex-row items-center justify-between py-[8px]  px-[60px] bg-white relative z-10"
    >
      <div className="w-full flex flex-row items-center justify-between px-6 py-2">
        <div className="flex flex-row justify-start items-center w-full">
          <nav>
            <ul className="flex flex-wrap items-center justify-between text-base  pt-4 md:pt-0 space-x-4">
              <Image src={logo} height={30} width={30} />
              <li>
                <a
                  className="font-bold md:text-[18px] text-[16px] leading-[27px] text-[#464646]"
                  href="#"
                >
                  Auto Pay
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className=" order-2  flex-wrap w-full items-end justify-end mr-0 flex"
          id="nav-content"
        >
          <div className="auth flex items-end justify-end w-full md:w-full space-x-4">
            {/* <button suppressHydrationWarning className='bg-[#6941C6] text-gray-200  p-2 rounded hover:opacity-20 hover:text-gray-100' onClick={() => setVisible(!visible)}>
                            {isConnected ? getEllipsisTxt(address) : "Connect Wallet"}
                        </button> */}
            <ConnectWalletCustom suppressHydrationWarning />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
