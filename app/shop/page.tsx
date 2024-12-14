"use client";

import Stone from "@/public/assets/stone/1.png";
import Stone2 from "@/public/assets/stone/2.png";
import Stone3 from "@/public/assets/stone/3.png";
import Stone4 from "@/public/assets/stone/4.png";
import Stone5 from "@/public/assets/stone/5.png";

import Info from "@/public/icons/info.png";
import Bookmark from "@/public/icons/heart-circle-plus.svg";
import List from "@/public/icons/list.svg";
import Eye from "@/public/icons/eye.png";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="pt-28 relative">
      <div className="flex items-center justify-center text-2xl">
        <div className="w-[95%] bg-[#2F2323]/85 h-12 rounded-lg">
          <h1 className="text-center h-full text-white font-dirooz flex items-center justify-center text-2xl">
            طرح سنگ
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mt-3 mb-12">
        <div className="bg-black text-white text-sm rounded-lg px-3 py-1">
          رنگ
        </div>
        <div className="bg-black text-white text-sm rounded-lg px-2 py-1">
          سال ساخت
        </div>
        <div className="bg-white text-black text-sm rounded-lg px-2 py-1">
          کیفیت
        </div>
        <div className="bg-black text-white text-sm rounded-lg px-2 py-1">
          محبوب ترین
        </div>
        <div className="bg-black text-white text-sm rounded-lg px-2 py-1">
          پیشنهاد ما
        </div>
      </div>

      <div>
        <div
          className="bg-white/70 rounded-lg my-3 mx-1 relative"
          onClick={handleClick}
        >
          <div className="h-[210px] flex justify-between items-center">
            <div className="overflow-hidden mx-2">
              <Image src={Stone} alt="Image" className="h-[96%]" />
            </div>

            <div className="h-full w-[45%] flex flex-col justify-around pt-5 pb-4">
              <div className="text-center text-2xl">ST 4010</div>
              <div>
                ابعاد <span>40x40</span>
              </div>
              <div className="flex justify-start items-center gap-1">
                <div className="bg-orange-400 rounded-full w-8 h-8"></div>
                <div className="bg-blue-400 rounded-full w-8 h-8"></div>
                <div className="bg-black rounded-full w-8 h-8"></div>
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  className="rounded-lg text-lg p-1 bg-white text-black"
                >
                  قیمت: تماس بگیرید
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/70 rounded-lg my-3 mx-1">
          <div>
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                <div className="absolute bg-[#1E1B1B] top-[9rem] font-bold text-lg rounded-sm p-3 text-white">
                  <div className="flex justify-between items-center gap-2">
                    <div>ST 4010</div>
                    <Image src={Eye} alt="Product View" />
                  </div>
                </div>
                <div className="absolute top-[12rem] left-2 w-[96%] py-5 px-3 bg-black bg-opacity-50  rounded-md z-50">
                  <div className="h-80 grid grid-cols-2 gap-y-1 gap-x-2 animate-fadeIn">
                    <div className="overflow-hidden flex ">
                      <Image
                        src={Stone4}
                        alt="Image 1"
                        className="h-[96%] w-[94%] overflow-hidden object-cover rounded-lg"
                      />
                      <div className="flex items-center flex-col justify-center gap-y-1">
                        <div className="bg-gray-400 p-1 w-8 h-8 bg-opacity-20 rounded-l-lg flex items-center justify-center">
                          <Image
                            src={List}
                            alt="Image 1"
                            className="rounded-lg overflow-hidden"
                          />
                        </div>
                        <div className="bg-gray-400 p-1 w-8 h-8 bg-opacity-20 rounded-l-lg flex items-center justify-center">
                          <Image
                            src={Bookmark}
                            alt="Image 2"
                            className="rounded-lg overflow-hidden"
                          />
                        </div>
                        <div className="bg-gray-400 p-1 w-8 h-8 bg-opacity-20 rounded-l-lg flex items-center justify-center">
                          <Image
                            src={Info}
                            alt="Image 3"
                            className="rounded-lg overflow-hidden pb-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="overflow-hidden flex ">
                      <Image
                        src={Stone4}
                        alt="Image 1"
                        className="h-[96%] w-[94%] overflow-hidden object-cover rounded-lg"
                      />
                      <div className="flex items-center flex-col justify-center gap-y-1">
                        <div className="bg-gray-400 p-1 w-8 h-8 bg-opacity-20 rounded-lg flex items-center justify-center">
                          <Image
                            src={List}
                            alt="Image 1"
                            className="rounded-lg overflow-hidden"
                          />
                        </div>
                        <div className="bg-gray-400 p-1 w-8 h-8 bg-opacity-20 rounded-l-lg flex items-center justify-center">
                          <Image
                            src={Bookmark}
                            alt="Image 2"
                            className="rounded-lg overflow-hidden"
                          />
                        </div>
                        <div className="bg-gray-400 p-1 w-8 h-8 bg-opacity-20 rounded-l-lg flex items-center justify-center">
                          <Image
                            src={Info}
                            alt="Image 3"
                            className="rounded-lg overflow-hidden pb-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="overflow-hidden flex ">
                      <Image
                        src={Stone5}
                        alt="Image 1"
                        className="h-[96%] w-[94%] overflow-hidden object-cover rounded-lg"
                      />
                      <div className="flex items-center flex-col justify-center gap-y-1">
                        <div className="bg-gray-400 p-1 w-8 h-8 bg-opacity-20 rounded-l-lg flex items-center justify-center">
                          <Image
                            src={List}
                            alt="Image 1"
                            className="rounded-lg overflow-hidden"
                          />
                        </div>
                        <div className="bg-gray-400 p-1 w-8 h-8 bg-opacity-20 rounded-l-lg flex items-center justify-center">
                          <Image
                            src={Bookmark}
                            alt="Image 2"
                            className="rounded-lg overflow-hidden"
                          />
                        </div>
                        <div className="bg-gray-400 p-1 w-8 h-8 bg-opacity-20 rounded-l-lg flex items-center justify-center">
                          <Image
                            src={Info}
                            alt="Image 3"
                            className="rounded-lg overflow-hidden pb-2"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="overflow-hidden col-span-1">
                  <Image
                    src={Stone5}
                    alt="Image 3"
                    className="h-[96%] w-full object-cover rounded-lg"
                  />
                  <div className="flex items-center flex-col justify-center gap-y-1">
                    <div className="bg-gray-400 p-1 w-8 h-8 bg-opacity-20 rounded-l-lg flex items-center justify-center">
                      <Image
                        src={List}
                        alt="Image 1"
                        className="rounded-lg overflow-hidden"
                      />
                    </div>
                    <div className="bg-gray-400 p-1 w-8 h-8 bg-opacity-20 rounded-l-lg flex items-center justify-center">
                      <Image
                        src={Bookmark}
                        alt="Image 2"
                        className="rounded-lg overflow-hidden"
                      />
                    </div>
                    <div className="bg-gray-400 p-1 w-8 h-8 bg-opacity-20 rounded-l-lg flex items-center justify-center">
                      <Image
                        src={Info}
                        alt="Image 3"
                        className="rounded-lg overflow-hidden pb-2"
                      />
                    </div>
                  </div>
                </div> */}
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="bg-[#575050] text-white px-3 py-1 rounded-lg my-5 font-dirooz text-lg"
                      onClick={closeModal}
                    >
                      بازگشت
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="h-[210px] flex justify-between items-center">
            <div className="overflow-hidden mx-2">
              <Image src={Stone2} alt="Image" className="h-[96%]" />
            </div>

            <div className="h-full w-[45%] flex flex-col justify-around pt-5 pb-4">
              <div className="text-center text-2xl">ST 4010</div>
              <div>
                ابعاد <span>40x40</span>
              </div>
              <div className="flex justify-start items-center gap-1">
                <div className="bg-orange-400 rounded-full w-8 h-8"></div>
                <div className="bg-blue-400 rounded-full w-8 h-8"></div>
                <div className="bg-black rounded-full w-8 h-8"></div>
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  className="rounded-lg text-lg p-1 bg-white text-black"
                >
                  قیمت: تماس بگیرید
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/70 rounded-lg my-3 mx-1">
          <div className="h-[210px] flex justify-between items-center">
            <div className="overflow-hidden mx-2">
              <Image src={Stone3} alt="Image" className="h-[96%]" />
            </div>

            <div className="h-full w-[45%] flex flex-col justify-around pt-5 pb-4">
              <div className="text-center text-2xl">ST 4010</div>
              <div>
                ابعاد <span>40x40</span>
              </div>
              <div className="flex justify-start items-center gap-1">
                <div className="bg-orange-400 rounded-full w-8 h-8"></div>
                <div className="bg-blue-400 rounded-full w-8 h-8"></div>
                <div className="bg-black rounded-full w-8 h-8"></div>
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  className="rounded-lg text-lg p-1 bg-white text-black"
                >
                  قیمت: تماس بگیرید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
