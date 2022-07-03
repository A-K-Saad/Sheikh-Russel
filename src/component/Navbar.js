import React, { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const [currentLink, setCurrentLink] = useState("");
  useEffect(() => {
    setCurrentLink(window.location.hash);
  }, []);

  window.addEventListener("hashchange", () => {
    setCurrentLink(window.location.hash);
  });

  const navs = [
    { name: "ছবি", to: "#photo-gallery" },
    { name: "ভিডিও", to: "#video-gallery" },
    { name: "ঘটনাপ্রবাহ", to: "#events" },
    { name: "কবিতা", to: "#poems" },
    { name: "গেমস", to: "#games" },
  ];

  return (
    <>
      <div className="sticky top-0 bg-white p-3 flex flex-wrap items-center justify-center z-50">
        {navs.map((e, i) => {
          return (
            <NavHashLink
              key={i}
              to={e.to}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "end" })
              }
              onClick={() => setCurrentLink(e.to)}
              className={`${
                currentLink === e.to
                  ? "bg-indigo-500 text-white"
                  : "bg-white hover:bg-gray-50"
              } rounded-md px-3 py-2 m-2`}
            >
              {e.name}
            </NavHashLink>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
