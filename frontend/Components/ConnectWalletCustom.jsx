import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Blockies from "react-blockies";

function ConnectWalletCustom() {
  return (
    <div className="font-poppins">
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={() => openConnectModal()}
                      type="button"
                      className="w-full bg-[#10bb35] text-[#fff] py-3.5 px-3.5 leading-[1.43]  tracking-[0.17px] rounded-xl flex justify-center items-center font-medium "
                    >
                      <svg
                        className="w-6 mr-2 fill-white"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="AccountBalanceWalletOutlinedIcon"
                      >
                        <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"></path>
                        <circle cx="16" cy="12" r="1.5"></circle>
                      </svg>
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={() => openChainModal()}
                      type="button"
                      className="hover:bg-[#f9f9f9] rounded-lg w-full"
                    >
                      <div className="custom-btn-inside-parent flex justify-between items-center ml-2 py-2 px-3 w-full">
                        <Blockies
                          className="identicon rounded-lg w-full"
                          seed={"acl-too"}
                          size={12}
                          scale={3}
                        />
                        <div className="custom-btn-address pl-[20px] flex justify-start items-center flex-col w-full">
                          <h2 className="leading-[150%] font-medium tracking-[0.15px] text-[1rem] text-left w-full">
                            {account.displayName}
                          </h2>
                          <h2 className="text-[0.875rem] tracking-[0.17px] leading-[1.43] text-left text-[#d22525]">
                            Wrong network
                          </h2>
                        </div>
                      </div>
                    </button>
                  );
                }

                return (
                  <div
                    style={{ display: "flex", gap: 12 }}
                    className="parent-custom-connect-button font-poppins w-full"
                  >
                    <button
                      onClick={() => openAccountModal()}
                      type="button"
                      className="custom-connect-button hover:bg-[#f9f9f9] rounded-lg w-full"
                    >
                      <div className="custom-btn-inside-parent flex justify-between items-center ml-2 py-2 px-3 w-full">
                        <Blockies
                          className="identicon rounded-lg w-full"
                          seed={"acl-too"}
                          size={12}
                          scale={3}
                        />
                        <div className="custom-btn-address pl-[20px] w-full">
                          <h2 className="font-medium text-[1rem] w-full items-center justify-start flex">
                            {account.displayName}
                          </h2>
                          <h2 className="text-[0.875rem] tracking-[0.17px] leading-[1.43] text-left text-[#10bb35]">
                            Connected
                          </h2>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
}

export default ConnectWalletCustom;