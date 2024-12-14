import Gallery1 from "@/public/assets/scroll_gallery_1.png";
import Gallery2 from "@/public/assets/scroll_gallery_2.png";
import Gallery3 from "@/public/assets/scroll_gallery_3.png";
import Article from "@/public/assets/articles.png";
import ArticleList from "@/public/assets/article_list.png";
import Footer from "@/public/assets/footer.png";

import Image from "next/image";

export function ThirdPage() {
  return (
    <div className="h-[1500px] w-full bg-white" dir="ltr">
      <div className="w-full h-32 overflow-x-scroll">
        <div className="pl-3">
          <div className="w-[975px] ">
            <div className="flex gap-x-5">
              <div className=" h-36 w-[9rem] rounded-lg ">
                <Image
                  src={Gallery1}
                  alt="Art Scroll Gallery"
                  className="object-fit w-full h-24"
                />

                <div className="pl-3 text-sm font-[12px] ">TMC 1564</div>
              </div>

              <div className="bg-gray-300 h-24 w-[9rem] rounded-lg">
                <Image
                  src={Gallery2}
                  alt="Art Scroll Gallery"
                  className="object-fit w-full h-full"
                />
                <div className="pl-3 text-sm font-[12px] ">TMC 1565</div>
              </div>

              <div className="bg-gray-300 h-24 w-[9rem] rounded-lg ">
                <Image
                  src={Gallery3}
                  alt="Art Scroll Gallery"
                  className="object-fit w-full h-full rounded-lg"
                />
                <div className="pl-3 text-sm font-[12px] ">TMC 1566</div>
              </div>

              <div className="bg-gray-300 h-24 w-[9rem] rounded-lg ">
                <Image
                  src={Gallery1}
                  alt="Art Scroll Gallery"
                  className="object-fit w-full h-full"
                />
                <div className="pl-3 text-sm font-[12px] ">TMC 1566</div>
              </div>
              <div className="bg-gray-300 h-24 w-[9rem] rounded-lg">
                <Image
                  src={Gallery2}
                  alt="Art Scroll Gallery"
                  className="object-fit w-full h-full"
                />
                <div className="pl-3 text-sm font-[12px] ">TMC 1566</div>
              </div>
              <div className="bg-gray-300 h-24 w-[9rem] rounded-lg ">
                <Image
                  src={Gallery3}
                  alt="Art Scroll Gallery"
                  className="object-fit w-full h-full rounded-lg"
                />
                <div className="pl-3 text-sm font-[12px] ">TMC 1566</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-24">
        <div className="font-dirooz font-extrabold text-2xl text-right pr-3">
          اخبار و مقالات
        </div>

        <div className="pr-2">
          <Image src={Article} alt="Articles" />
        </div>

        <div className="my-2">
          <Image src={ArticleList} alt="Articles" />
        </div>

        <div className="w-full h-full">
          <Image src={Footer} alt="Footer" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
