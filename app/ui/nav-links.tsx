"use client";

import Image from "next/image";
import HamburgurMenu from "@/public/icons/image.png";
import BrandLogo from "@/public/logo-single.png";
import Catalogue from "@/public/assets/catalogue.png";

import Home from "@/public/icons/house.png";
import Product from "@/public/icons/shapes.png";

import ShoppingCard from "@/public/icons/cart-shopping.png";
import Profile from "@/public/icons/user.png";
import DropDown from "@/public/icons/Vector.png";
import About from "@/public/icons/info.png";
import Search from "@/public/icons/search.png";
import ArrowLeft from "@/public/icons/arrow-left.png";

import { useState } from "react";

export function NavLinks() {
  // const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="">
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-2 py-4 gap-2 z-50 bg-black/60  shadow-inner shadow-slate-400">
        <div className="">
          <button type="button" className="bg-transparent" onClick={toggleMenu}>
            <Image
              src={HamburgurMenu}
              height={48}
              width={48}
              alt="fries menu"
            />
          </button>
          {menuOpen && (
            <div className="fixed inset-0 z-50 flex-row items-start justify-center bg-black bg-opacity-20 backdrop-blur-md ">
              <div className="h-36 w-full mt-1 bg-[#f1f5f914] flex flex-col">
                <div className="h-12 w-80 mt-5 mr-8  flex items-center justify-start border-b-[1px]">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="w-[93%] bg-transparent outline-none border-none px-8 text-white/70"
                    placeholder="موردی برای جستجو..."
                  />
                  <div>
                    <Image src={Search} alt="Search Icon" />
                  </div>
                </div>

                <div className="mt-2 pl-4 flex justify-center items-center gap-2 text-sm">
                  <button
                    type="button"
                    className="px-5 py-2 bg-[#17595E] text-white/80 rounded-md"
                  >
                    تخمین پروژه
                  </button>
                  <button
                    type="button"
                    className="px-3 py-2 bg-[#FDFDFD] text-dark rounded-md"
                  >
                    رزرو وقت مشاوره
                  </button>
                  <div className="animate-fadeIn">
                    <button
                      type="button"
                      className="relative bg-[#] overflow-hidden flex items-center justify-center"
                    >
                      <Image src={Catalogue} alt="Menu trigger" height={36} />
                      <span className="absolute inset-0 flex items-center justify-center text-white ">
                        کاتالوگ
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-row ">
                <div className="h-[48rem] w-[90%] bg-[#f1f5f914] flex flex-col items-start justify-start text-white pr-8 leading-8 ">
                  <div className="flex flex-col justify-between ">
                    <ul className="">
                      <li className="flex items-center gap-2">
                        <span>
                          <Image src={Home} alt="Home" />
                        </span>
                        خانه
                      </li>
                      <li
                        className="flex items-center gap-2 "
                        onClick={toggleDropdown}
                      >
                        <span>
                          <Image src={Product} alt="Home" />
                        </span>
                        محصولات
                        <span>
                          <Image src={DropDown} alt="Drop down" />
                        </span>
                      </li>
                      {isOpen && (
                        <div className="bg-[#f1f5f914] rounded-lg p-3 w-64 shadow-lg transition-all duration-300 ease-in-out transform origin-top animate-fadeIn">
                          <ul>
                            <li className="font-bold text-md">موزائیک</li>
                            <div className="mosaic">
                              <div className="text-gray-300">پلیمری</div>
                              <div className="text-gray-300">صنعتی</div>
                              <div className="text-gray-300">پرسی</div>
                            </div>

                            <li className="font-bold text-md">استون</li>
                            <div className="stone">
                              <div className="text-gray-300">طرح سنگ</div>
                              <div className="text-gray-300">لایت استون</div>
                            </div>
                            <li className="font-bold text-md">بتون</li>
                            <div className="beton">
                              <div className="text-gray-300">واش بتن</div>
                              <div className="text-gray-300">واش استون</div>
                              <div className="text-gray-300">تایل بتن</div>
                            </div>
                            <li className="font-bold text-md">سایر</li>
                            <div className="others">
                              <div className="text-gray-300">جدول ویبره</div>
                            </div>
                          </ul>
                        </div>
                      )}
                      <li className="flex items-center gap-2">
                        <span>
                          <Image src={ShoppingCard} alt="Home" />
                        </span>
                        سبد خرید
                      </li>
                      <li className="flex items-center gap-2">
                        <span>
                          <Image src={Profile} alt="Home" />
                        </span>
                        پروفایل
                      </li>

                      <li className="flex items-center gap-2">
                        <span>
                          <Image src={About} alt="Home" />
                        </span>
                        درباره ما
                      </li>
                    </ul>

                    <div className="text-[13px] text-[#ffffff] font-bold">
                      خواندن <span className="text-[#9fdaff]">قوانین</span> و
                      مقررات
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-10 top-64 w-6 h-12 bg-black "
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <div className="flex items-center justify-center h-full">
                    <Image
                      src={ArrowLeft}
                      alt="fries menu"
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <h4 className="text-[#E4DE21] text-2xl">قصر موزائیک</h4>
        </div>
        <div className="h-[48px] flex items-start">
          <Image src={BrandLogo} height={64} width={64} alt="Menu trigger" />
        </div>
        {/* <ul className="">
          <li>
            <Link
              href="/dashboard"
              className={`link ${pathname === "/ ? active : ''"}`}
            >
              Profile
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}
