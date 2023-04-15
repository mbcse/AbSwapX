/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from "@headlessui/react";
import { CgCloseR } from "react-icons/cg";
import { Fragment } from "react";

const Modal = ({
  open,
  onClose,
  title,
  onOk,
  okText,
  children,
  width = "lg",
  disabled,
  loading,
  showCTA = true,
  showClose = true,
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-[100] inset-0 overflow-y-auto scrollbar-hide "
        // onClose={onClose}
        onClose={() => { }}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-0 text-center sm:block sm:p-0 text-black overflow-y-auto scrollbar-hide  bg-opacity-70 bg-[#000000]  font-britanica font-normal  ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0  bg-opacity-70 transition-opacity" />
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
            <Dialog.Panel
              className={`inline-block align-bottom bg-white    rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-[30rem] max-w-${width} w-full `}
            >
              <div className="flex flex-row justify-between items-center w-full px-4 py-3 gap-4 border-b-[#ebebeb] border-b">
                {
                  <Dialog.Title
                    as="h3"
                    className="font-medium text-[18px] text-[#464646]  "
                  >
                    {title}
                  </Dialog.Title>
                }
                {showClose && (
                  <button
                    onClick={onClose}
                    className="stroke-[#464646] "
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.25 9.25L16 16M16 16L9.25 22.75M16 16L22.75 22.75M16 16L22.75 9.25" stroke="#999CA0" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </button>
                )}
              </div>
              <div className="w-full h-full">
                
                  <div className="">{children}</div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
