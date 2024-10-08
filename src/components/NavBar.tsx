import React from "react";
import Group from "../assets/Group.svg";
import { IoIosArrowDown } from "react-icons/io";
import AnchorTemporaryDrawer from "./SideBard";
import useMediaQuery from "../hooks/useMediaQuery";
const NavBar: React.FC = () => {
  const is1024pxOrMore = useMediaQuery("(min-width: 1024px)");
  return (
    <header className="bg-white shadow-md lg:px-16 p-4 pb-4">
      <div className=" container gap-14 max-w-none flex lg:justify-around justify-between px-11 py-6 rounded-full items-center  lg:bg-[#FAFAFA] ">
        <div className="flex items-center">
          <img src={Group} alt="Rseen Logo" />
        </div>
        {is1024pxOrMore && (
          <>
            <ul className="flex justify-center lg:gap-8 gap-4 ">
              <li className="text-xl">
                <a href="#" className="  text-secondary font-[600]">
                  الرئيسية
                </a>
              </li>
              <li className="text-xl">
                <a
                  href="#"
                  className="  hover:text-secondary text-[#000000] font-[600]"
                >
                  إعرفني
                </a>
              </li>
              <li className="flex gap-1 text-xl justify-center items-center hover:text-secondary">
                <a
                  href="#"
                  className="  hover:text-secondary text-[#000000] font-[600]"
                >
                  المكاتب الهندسية
                </a>
                <IoIosArrowDown />
              </li>
              <li className="flex gap-1 text-xl justify-center items-center hover:text-secondary">
                <a
                  href="#"
                  className=" hover:text-secondary  text-[#000000] font-[600]"
                >
                  المقاولات والديكور
                </a>
                <IoIosArrowDown />
              </li>
              <li className="text-xl">
                <a
                  href="#"
                  className="  hover:text-secondary text-[#000000] font-[600]"
                >
                  المقالات
                </a>
              </li>
              <li className="text-xl">
                <a
                  href="#"
                  className="  hover:text-secondary text-[#000000] font-[600]"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
            <div>
              <button className="min-w-[255px] bg-[#004267] text-white px-6 py-6 rounded-full font-[600]">
                احصل على عرض مجاناً
              </button>
            </div>
          </>
        )}
        {!is1024pxOrMore && <AnchorTemporaryDrawer />}
      </div>
    </header>
  );
};

export default NavBar;
