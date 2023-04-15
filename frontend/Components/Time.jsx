import { Fragment, ReactNode, ReactText, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Caroline Schultz" },
  { id: 8, name: "Mason Heaney" },
  { id: 9, name: "Claudie Smitham" },
  { id: 10, name: "Emil Schaefer" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Time = ({ options, onChange, value, placeholder, width, }) => {
  const selectedValue = options?.find((option) => option === value);
  console.log(value)
  console.log(options)

  return (
    <Listbox value={selectedValue} onChange={(option) => onChange(option)}>
      {({ open }) => (
        <>
          <div className="relative text-black">
            <Listbox.Button
              className={`flex flex-row w-[150px] justify-between items-center py-[8px] px-[14px]  gap-[10px] isolate bg-white  border border-[rgba(70,70,70,0.1)] text-[#464646]  text-[16px]  rounded-[8px] dropdown`}
            >
              <div className=" truncate flex p-1">
                {selectedValue?.name ?? (
                  <span>{placeholder ?? "Select an option"}</span>
                )}
              </div>
              <div className="stroke-[#464646]  opacity-20  ">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 10.125L12 14.125L16 10.125"
                    stroke="#464646"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className={`absolute right-0 z-10 w-full  mt-2 p-[10px]  origin-top-right   rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                {options?.map((option) => (
                  <Listbox.Option
                    // key={option.address ?? option.chainId}
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "text-white bg-primary-green rounded-md"
                          : "text-[#464646] ",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex flex-row  justify-start items-center gap-[10px]">
                          
                          <span
                            className={classNames(
                              selected ? "font-medium" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {option.name}
                          </span>
                        </div>
                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-[#464646]" : "text-white",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Time;
