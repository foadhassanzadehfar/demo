import { Metadata } from "next";
import HeroBanner from "@/public/assets/herobanner.jpg";
import Image from "next/image";
import { FirstBg } from "./ui/firstbg";
import { NavLinks } from "./ui/nav-links";
import { SecondPage } from "./ui/second";
import { ThirdPage } from "./ui/third";
export const metadata: Metadata = {
  title: "Ghasre Mosaic | قصر موزائیک",
};

export default function Home() {
  return (
    <>
      <div className="bg-[url('/assets/first.png')] bg-cover bg-center h-screen w-screen font-dirooz">
        <FirstBg />

        <NavLinks />
        <div className="py-12">
          <div className="h-auto w-full overflow-hidden">
            <div className=" mt-24 animate-fadeIn transition-all ease-in-out duration-3700">
              <Image
                src={HeroBanner}
                alt="Hero banner"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="h-28 bg-[#E4E3E3]/20">
            <div className="flex justify-center items-center">
              <h2 className="pt-3 pb-3 text-lg font-bold text-white">
                موزائیک هایی خاص، برای شما که خاص فکر میکنید
              </h2>
            </div>

            <div className="w-full flex justify-center items-center gap-2">
              <button type="button" className="bg-[#f7f7f7] text-black p-3">
                درباره ما
              </button>
              <button
                type="button"
                className=" bg-black text-[#f7f7f7] p-3 transition-y-5 transition-all ease-in-out duration-3700 animate-slideInRight"
              >
                دریافت مشاوره رایگان
              </button>
            </div>
          </div>
        </div>
      </div>

      <SecondPage />
      <ThirdPage />
    </>
  );
}
