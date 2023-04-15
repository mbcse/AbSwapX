import React, { useContext, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { AppContext } from "../context/AppContext";

export const LoaderSvg = () => (
  <svg
    className="mr-3 h-10 w-10 animate-spin text-[#464646] stroke-[#464646]"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75 fill-[#464646]"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const Loader = ({ message, desc, img, bg = false }) => {
  const { loading, setLoading } = useContext(AppContext);

  return (
    <Transition.Root show={loading} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-[100000] inset-0 overflow-y-auto scrollbar-hide"
        onClose={() => {}}
      >
        <div
          className={`flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0 text-white    ${
            bg
              ? "bg-[url('https://landing-video.s3.ap-south-1.amazonaws.com/appbg.png')] bg-center bg-fixed bg-cover"
              : "bg-opacity-50  bg-[#000000]"
          }`}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0  bg-opacity-50 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={`inline-block align-bottom rounded-lg text-left transform transition-all sm:align-middle max-w-sm w-full  ${
                !bg && "bg-white"
              } `}
            >
              <div className="">
                <div className="mt-3 text-center sm:mt-5">
                  <div className="flex flex-col items-center gap-5 justify-center py-8 px-6">
                    <LoaderSvg />
                    <p className="text-3xl text-[#464646]">
                      {message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Loader;
