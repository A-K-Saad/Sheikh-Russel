import React, { useState } from "react";
import audioVisual from "../media/audio-visual.png";

const VideoGallery = () => {
  const videos = [
    {
      title: "স্মৃতিতে অম্লান শেখ রাসেল | Sheikh Russel",
      link: "https://www.youtube.com/embed/e_DMlKHtNdU",
      poster: audioVisual,
      uploadTime: " Nov 23, 2021",
    },
    {
      title:
        "যেভাবে কেড়ে নেয়া হয় শেখ রাসেলের প্রাণ | Sheikh Russel | Sheikh Hasina | Somoy TV",
      link: "https://www.youtube.com/embed/LPXoJrlqTiA",
      poster: "https://i.ytimg.com/vi_webp/LPXoJrlqTiA/maxresdefault.webp",
      uploadTime: " Oct 19, 2021",
    },
    {
      title:
        "'শেখ রাসেলের লগে গাড়ি ঠেলতাম, হেয় চালাইতো' | Sheikh Mujibur Rahman | Sheikh Russel | Somoy TV",
      link: "https://www.youtube.com/embed/EQoUVqX-yao",
      poster: "https://i.ytimg.com/vi/EQoUVqX-yao/maxresdefault.jpg",
      uploadTime: "Aug 15, 2021",
    },
    {
      title:
        "মায়ের কাছে নেয়ার কথা বলে হত্যা করা হয় রাসেলকে | Sheikh Russel | Somoy TV",
      link: "https://www.youtube.com/embed/nXc3gpvg9k4",
      poster: "https://i.ytimg.com/vi_webp/nXc3gpvg9k4/maxresdefault.webp",
      uploadTime: "Oct 17, 2021",
    },
    {
      title:
        "'হাসিনা-রেহানা আপা দ্যাখলেই চেনবে আমারে!' |Sheikh Mujibur Rahman |Sheikh Russel |15 August |Somoy TV",
      link: "https://www.youtube.com/embed/xYhAVdQktKo",
      poster: "https://i.ytimg.com/vi/xYhAVdQktKo/maxresdefault.jpg",
      uploadTime: "Aug 15, 2021",
    },
  ];
  const [video, setVideo] = useState(videos[0]);

  return (
    <>
      <div className="max-w-full bg-white pt-4" id="video-gallery">
        <h1 className="mt-3 mb-3 text-center text-xl md:text-4xl font-bold text-stroke text-underline-3">
          শেখ রাসেলের ভিডিওসমূহ
        </h1>
        <div className="mx-auto sm:p-6 2xl:container px-3 lg:px-8 lg:grid lg:grid-cols-12 gap-8">
          <div className="col-span-7 rounded-xl overflow-hidden h-max">
            <iframe
              src={video.link}
              title={videos.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-56 md:h-72 lg:h-[26rem]"
            ></iframe>
          </div>
          <div className="col-span-5 divide-y bg-white rounded-xl h-[26rem] overflow-auto mt-2 md:mt-0">
            {videos.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex md:space-x-5 p-4 cursor-pointer hover:bg-neutral-50 hover:underline transition-all flex-col md:flex-row"
                  onClick={() => setVideo(e)}
                >
                  <img
                    src={e.poster}
                    alt={e.title[0]}
                    className="rounded-lg w-44 m-auto"
                  />
                  <div>
                    <h1 className="mt-2 md:mt-0">{e.title}</h1>
                    <p className="text-gray-400">{e.uploadTime}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGallery;
