import React from "react";
import { styles } from "../styles";
export default function Navbar(){
  const logo = "./dist/goviral_logo.png"
  return (
    <>
        <nav className={`${styles.paddingX} w-full glass-effect shadow-xl sticky mt-0  z-50 top-0`}>
          <div className="flex items-center justify-center">
            <a
              href="/"
              className=""
              onClick={() => {
                setActive("");
                windows.scrollTo(0, 0);
              }}
            >


              <div className="pb-6 ">
                 <img src={logo}  alt="goviral logo" className="w-32  object-cover " />
              </div>
            </a>
          </div>

         
        </nav>
    </>
  );
};
