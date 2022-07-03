import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Poems = () => {
  const poems = [
    {
      title: "আতাই পাতাই",
      author: "মার্জিয়া ইসলাম",
      body: "আতাই পাতাই দুইটি বুড়ো\nদেখতে যেন পাহাড় চুড়ো\nতরতরিয়ে উঠতে গিয়ে\nপিছলে পড়ে হাড্ডি গুঁড়ো।\nঐ যে দেখ দুষ্টু ছেলে\nপড়ছে ধপাস ধাপ\nতাই না দেখে খোকন কাঁদে\nকোথায় গেল বাপ।\nমার্জিয়া কয় ঘুমায় রে\nআমার ছড়া ফুরায় রে।",
    },
    {
      title: "শেখ রাসেল",
      author: "ইসমাইল জসীম",
      body: "এক যে ছিল ছোট্ট শিশু কচি কোমল প্রাণ,\nরোজ সকালে নিতো মায়ের আঁচল পোতা ঘ্রাণ।\nসূর্য উঠার আগে সেদিন ঘুম ভেঙে যায় তার,\nঅন্ধকারে হাতড়ে দেখে নেই ঠিকানা মার ।\n\nযে শিশুটি মার আঁচলে স্বপ্ন হাজার বুনে\nসেই মায়েরই শাড়ির আঁচল রঞ্জিত আজ খুনে।\nলুটিয়ে আছে নিথর দেহ বাবা এবং মায়ের ,\nশুয়ার ঘরে লাশ পড়েছে ভাবি এবং ভায়ের । \n\nএসব কাণ্ড করলো কারা? ভেবে না পায় কুল,\nযা দেখছে সত্যি নাকি? নাকি মনের ভুল।\nভুল নয় গো দেখলো যা সব মীর জাফরের কাজ\nগুলি খেয়েই মরতে হবে শেখ রাসেলের আজ?\n\nএমন সময় পেছন থেকে এক হায়েনা তেড়ে\nছোট শিশু শেখ রাসেলের প্রাণটা নিলো কেড়ে।\nগুলির ঘায়ে ঝাঁঝরা হলো শেখ রাসেলের বুক\nজাতির এমন লজ্জাতে আজ কোথায় লুকাই মুখ?",
    },
    {
      title: "বন্ধু আমার রাসেল",
      author: "পরিতোষ বাবলু",
      body: "মুক্তিসেনা আর সাজে না\nনেই গোছানো বই\nসাইকেলেও বেল বাজে না\nরাসেল গেল কই?\n\nএ ঘর খুঁজি, সে ঘর খুঁজি\nখুঁজতে গেলাম ছাদে\nপাশের বাড়ির ছোট্ট বিড়াল\nকেমন জানি কাঁদে।\n\nপাড়ার কুকুর সকাল-দুপুর\nকান্না করে ডাকে\nকই লুকানো বন্ধু রাসেল?\nপ্রশ্ন করি মাকে\n\nমায়ের চোখে জলটা দেখি\nমনটা কেন ভারি?\nদুষ্টুগুলো আসলো চেপে\nজলপাই রং গাড়ি!\n\nবলল বাবা আসবে রাসেল\nঘুমায় যখন পাড়া\nরাসেল সোনা ওই আকাশে\nএকটি ধ্রুব তারা।\n\nআকাশ পানে সন্ধ্যা রাতে\nতাইতো চেয়ে থাকি\nকোন তারাটি বন্ধু আমার\nরাসেল বলে ডাকি?",
    },
  ];
  return (
    <>
      <div className="max-w-full py-5">
        <h1 className="mt-3 mb-1 text-center text-xl md:text-4xl font-bold text-stroke text-underline-1">
          শেখ রাসেল কবিতা
        </h1>
        <div className="">
          {/* {poems.map((p, i) => {
            return (
              <div className="p-4 max-w-full overflow-hidden" key={i}>
                <h1 className="text-indigo-900 font-bold text-2xl text-center">
                  {p.title}
                </h1>
                <p className="text-center relative left-6">{p.author}</p>
                <p className="whitespace-pre-line">{p.body}</p>
              </div>
            );
          })} */}
          <Swiper
            watchSlidesProgress={true}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            slidesPerView={3}
            className="w-full grid grid-cols-4 divide-x overflow-hidden"
          >
            {poems.map((p, i) => {
              return (
                <SwiperSlide
                  className="p-4 overflow-hidden border-r mr-0"
                  key={i}
                >
                  <Slide p={p} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

const Slide = ({ p }) => {
  const [isFullOpen, setIsFullOpen] = useState(false);
  const allVerses = p.body.split("\n");

  useEffect(() => {
    setIsFullOpen(false);
  }, []);

  return (
    <>
      <h1 className="text-indigo-900 font-bold text-2xl text-center">
        {p.title}
      </h1>
      <p className="text-center relative left-6 text-indigo-700">{p.author}</p>
      <p className="whitespace-pre-line m-auto w-max">
        {allVerses.slice(0, isFullOpen ? allVerses.length : 9).map((r, i) => {
          return (
            <>
              <span key={i} className="inline">
                {i === 8 && !isFullOpen ? (
                  <>{r.slice(0, r.length - 3)}... </>
                ) : (
                  <>
                    {r}
                    <br />
                  </>
                )}

                {allVerses.length > 9 && !isFullOpen && i === 8 && (
                  <span
                    className="text-sm inline font-black cursor-pointer"
                    onClick={setIsFullOpen}
                  >
                    আরও দেখুন
                  </span>
                )}
              </span>
            </>
          );
        })}
      </p>
    </>
  );
};

export default Poems;
