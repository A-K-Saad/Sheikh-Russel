import React from "react";
import img1 from "../media/1.png";
import img2 from "../media/2.png";
import img3 from "../media/3.png";
import img4 from "../media/4.png";
import img5 from "../media/5.png";
import img6 from "../media/6.png";
import img7 from "../media/7.png";
import img8 from "../media/8.png";
import img9 from "../media/9.png";

const PhotoGallery = () => {
  const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <>
      <div className="w-full">
        <h1 className="mt-3 mb-1 text-center text-xl md:text-4xl font-bold text-stroke text-underline-2">
          শেখ রাসেলের ছবিসমূহ
        </h1>
        <div className="columns-3xs space-y-4 p-4">
          {photos?.map((e) => {
            return (
              <img
                key={e}
                src={e}
                alt={e[0]}
                className="aspect-auto w-full rounded-md"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
