import React from "react";
import ConnectWalletCustom from "./ConnectWalletCustom";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const SideBar = ({}) => {
  const [showDashboard, setDashboard] = useState(false);
  useEffect(() => {
    setDashboard(true);
  }, []);
  return (
    <div className="h-full block w-[300px] border-r-[1px] py-6 px-5 bg-white ">
      <div className="pb-4 pt-2">
        <img src="/logo.jpeg" className="rounded-lg overflow-hidden" />
        {/* <Image src="/logo.jpeg" height={15} width={165.55} /> */}
      </div>
      <div>
        <ConnectWalletCustom />
      </div>
      <ul className="flex flex-col list-none cursor-pointer py-4 gap-[10px] h-[1000px] ">
        <Link href="/">
          <div
            className={
              showDashboard
                ? `${styles.left_ul_link} ${styles.active}`
                : `${styles.left_ul_link}`
            }
          >
            <div className={styles.link_icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <rect fill="none" height="24" width="24" />
                <path d="M9,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2v14C11,20.1,10.1,21,9,21z M15,21h4c1.1,0,2-0.9,2-2v-5 c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v5C13,20.1,13.9,21,15,21z M21,8V5c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v3c0,1.1,0.9,2,2,2h4 C20.1,10,21,9.1,21,8z" />
              </svg>
            </div>
            <div className={styles.link_text}>Zaps</div>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
