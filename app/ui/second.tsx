"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Quality from "@/public/assets/info1.jpg";
import Supervising from "@/public/assets/supervising.jpg";
import NanoTechnology from "@/public/assets/nano.png";
import PioneerTiles from "@/public/assets/pioneers_top_section.png";
import TilesBg from "@/public/assets/tiles_in_bg.png";
import Aside from "@/public/assets/aside.png";
import Haji from "@/public/assets/haji.png";
import TitleHaji from "@/public/assets/title.png";
import Truck from "@/public/assets/truck.png";
import TruckIcon from "@/public/icons/truck.png";

import GridFirst from "@/public/assets/grid_first.png";
import GridSecond from "@/public/assets/grid_second.png";
import GridThird from "@/public/assets/grid_third.png";
export function SecondPage() {
  const [isVisible, setIsVisible] = useState(false);
  const myRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (myRef.current) {
        const rect = myRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-full w-full bg-black">
      <div className="py-1">
        <div className="h-16 bg-[#33476C]/80 flex items-center justify-center text-white font-bold text-2xl">
          <h2 className="">موزائیک در یک نگاه</h2>
        </div>

        <div
          ref={myRef}
          className={`my-4 h-24 bg-gray-400/15 p-3 leading-7 flex items-start justify-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <li className="text-white text-2xl"></li>
          <p className="text-white animate-fadeIn">
            این گروه صنعتی مفتخر است با تکیه بر آخرین دانش روز، بهترین کیفیت را
            به مشتریان خود ارائه دهد.
          </p>
        </div>
      </div>
      <div className="relative h-[420px] mx-2 my-12 rounded-lg bg-[#E4EAC3]/25 p-2  shadow-gray-700/40 shadow-xl drop-shadow-xl">
        <div className="h-[250px] bg-slate-400/10 rounded-lg overflow-hidden object-fit">
          <Image src={Quality} alt="Info" />
        </div>

        <div className="h-16 clip-polygon bg-black/30 flex items-start justify-start p-2 text-white text-center mt-[-16px] z-10">
          <button type="button" className="bg-[#155b6b] p-1">
            زیبایی و کیفیت
          </button>
        </div>

        <div className="h-auto mt-2">
          <p className="text-white text-justify text-sm mb-3">
            مدیران و متخصصین و پرسنل گروه صنعتی بر آن شدند تا به شما این امکان
            را بدهند که همواره فکر و ذهنتان از لحاظ کیفیت و زیبایی و تنوع کالا و
            دوام بالا در آرامش بوده باشد...
          </p>
        </div>

        <div className="flex justify-end items-center">
          <button
            type="button"
            className="bg-black text-white py-1 px-2 text-sm clip-polygon-continue"
          >
            ادامه مطلب
          </button>
        </div>
      </div>

      <div className="relative h-[420px] mx-2 my-12 rounded-lg bg-[#F1E0A8]/20 p-2  shadow-gray-500/40 shadow-2xl drop-shadow-xl">
        <div className="h-[250px] bg-slate-400/10 rounded-lg overflow-hidden object-fit">
          <Image src={Supervising} alt="Info" />
        </div>

        <div className="h-16 clip-polygon bg-black/30 flex items-start justify-start p-2 text-white text-center mt-[-16px] z-10">
          <button type="button" className="bg-[#66624e] p-1">
            طراحی ، نظارت و اجرا
          </button>
        </div>

        <div className="h-auto mt-2">
          <p className="text-white text-justify text-sm mb-3">
            مدیران و متخصصین و پرسنل گروه صنعتی بر آن شدند تا به شما این امکان
            را بدهند که همواره فکر و ذهنتان از لحاظ کیفیت و زیبایی و تنوع کالا و
            دوام بالا در آرامش بوده باشد...
          </p>
        </div>

        <div className="flex justify-end items-center">
          <button
            type="button"
            className="bg-black text-white py-1 px-2 text-sm clip-polygon-continue"
          >
            ادامه مطلب
          </button>
        </div>
      </div>

      <div className="relative h-[420px] mx-2 my-12 rounded-lg bg-[#b9e0ff40]/25 p-2  shadow-gray-400/40 shadow-2xl drop-shadow-xl mb-64">
        <div className="h-[250px] bg-slate-400/10 rounded-lg overflow-hidden object-fit">
          <Image src={NanoTechnology} alt="Info" />
        </div>

        <div className="h-16 clip-polygon bg-black/30 flex items-start justify-start p-2 text-white text-center mt-[-16px] z-10">
          <button
            type="button"
            className="bg-[#DDFFFD]/40 p-1 px-2 py-3 clip-polygon-nano"
          >
            تولید توسط فناوری نانو
          </button>
        </div>

        <div className="h-auto mt-2">
          <p className="text-white text-justify text-sm mb-3">
            مدیران و متخصصین و پرسنل گروه صنعتی بر آن شدند تا به شما این امکان
            را بدهند که همواره فکر و ذهنتان از لحاظ کیفیت و زیبایی و تنوع کالا و
            دوام بالا در آرامش بوده باشد...
          </p>
        </div>

        <div className="flex justify-end items-center">
          <button
            type="button"
            className="bg-black text-white py-1 px-2 text-sm clip-polygon-continue"
          >
            ادامه مطلب
          </button>
        </div>
      </div>

      {/* Pioneer Secion */}
      <div className="bg-gray-950/30 overflow-hidden ">
        <div className="relative flex items-start justify-center">
          <Image src={PioneerTiles} alt="Pioneers" />
          <span className="absolute inset-0 flex justify-start items-center text-dark/80 text-xl pt-3 pr-4">
            قصر موزائیک، از پیشگامان این صنعت
          </span>
        </div>

        <div className="h-[2380px] w-full bg-white">
          <div
            className="h-auto flex justify-between items-start overflow-hidden"
            dir="ltr"
          >
            <Image
              src={TilesBg}
              alt="Tiles in bg"
              className="w-[55%] h-[320px]"
            />
            <p
              className="w-[45%] text-right text-md leading-5 h-full py-1 px-2 flex justify-start items-start"
              dir="rtl"
            >
              گروه صنعتی ما که با بیش از یک ربع قرن تجربه در زمینه تولید و توزیع
              موزائیک فعالیت داشته (موزائیک بهفرش مشهد) هدف اصلی خود را جلب
              رضایت مشتریان و ارتقای سیستم کیفیت محصورات دانسته و خود را متعهد
              می داند تا از بهترین مواد اولیه در تولیدات خود استفاده نموده و
              مدیران آن نیز در تلاشند تا همواره با حفظ کیفیت و زیبایی کالا از
              هدر رفتن سرمایه های ملی و مردمی جلوگیری می کند.
            </p>
          </div>

          <div className="my-2 bg-[#C1B7A8] w-[96%] mx-2">
            <div className="p-6">
              <div className="h-full w-full flex flex-row-reverse">
                <div className="w-auto overflow-hidden">
                  <Image src={Aside} alt="ok" className="h-full" />
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="overflow-hidden flex-grow">
                    <Image
                      src={Haji}
                      alt="ok"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden flex-grow">
                    <Image
                      src={TitleHaji}
                      alt="ok"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute inset-0 flex justify-center items-center">
                      <span className="border-2 border-black text-center p-3 w-48 bg-[#D9D9D9]/20">
                        عکس حاجی
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg mt-5 w-full px-3 overflow-hidden">
              <Image
                src={Truck}
                alt="Tiles in bg"
                className="w-[100%] h-auto"
              />
            </div>
            <div className="relative w-full flex items-center justify-center font-dirooz">
              <div className="absolute bottom-3 rounded-lg clip-polygon-truck bg-[#9A9A9A]/85 h-[6.5rem] w-[90%]">
                <div className="flex justify-start items-center w-full gap-4 px-2 py-2">
                  <Image
                    src={TruckIcon}
                    alt="Tiles in bg"
                    className="h-7 w-9"
                  />
                  <div className="text-xl text-white font-light">
                    واحد حمل و نقل
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-start">
                <div className="absolute w-[98%] h-18 py-4 leading-[16px] top-[18px] left-0 text-sm font-bold px-8">
                  واحد حمل و نقل گروه{" "}
                  <strong className="text-white">صنعتی</strong> ما با بهره گیری
                  از پرسنل مجرب و متخصص همگام با{" "}
                  <strong className="text-red-500">مشتریان</strong> و تقاضای
                  آنان و با هدف جلب رضایت ایشان همواره تلاش نموده تا بتواند بر
                  طبق تعهدات این گروه صنعتی گام برداشته و نقش موثری در میزان
                  رضایت مندی مشتریان محترم داشته باشد.
                </div>
              </div>
            </div>
            <div className="my-7 px-8">
              <button
                type="button"
                className="rounded-md text-white bg-black p-1 text-[13px] font-black mx-[6px] font-dirooz "
              >
                ادامه مطلب
              </button>
            </div>
          </div>

          <div className="h-auto w-full ">
            <div className="flex justify-center items-center font-bold text-[18px] font-dirooz">
              <h2>نمونه کار ها</h2>
            </div>
          </div>

          <div className="w-auto h-full m-3 animate-fadeIn">
            <div className="my-2">
              <Image
                src={GridFirst}
                alt="Grid Gallery Mosaic"
                className="object-cover w-full"
              />
            </div>

            <div>
              <Image
                src={GridSecond}
                alt="Grid Gallery Mosaic"
                className="object-cover w-full"
              />
            </div>

            <div className="w-full relative my-3">
              <Image
                src={GridThird}
                alt="Grid Gallery Mosaic"
                className=" w-full object-contain"
              />

              <button
                type="button"
                className="absolute bottom-[43px] left-[71%] bg-[#FF0000] rounded-md font-bold text-[10px] py-1 px-2 text-white font-dirooz"
              >
                نمونه های بیشتر
              </button>
            </div>

            <div className="my-12">
              <div className="w-full flex justify-center ">
                <button
                  type="button"
                  className="bg-[#6B6565] font-bold font-dirooz text-white text-center px-3 py-1"
                >
                  کاتالوگ متریال
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
