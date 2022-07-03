import React, { useEffect, useState } from "react";
import rockL from "../media/rockL.png";
import rockR from "../media/rockR.png";
import paperL from "../media/paperL.png";
import paperR from "../media/paperR.png";
import scissorL from "../media/scissorL.png";
import scissorR from "../media/scissorR.png";
import rock from "../media/rock.png";
import paper from "../media/paper.png";
import scissor from "../media/scissor.png";
import { Howl, Howler } from "howler";
import smash from "../media/smash.mp3";
import { ImCross } from "react-icons/im";
import { AiOutlineReload, AiOutlineQuestion } from "react-icons/ai";
import blast from "../media/blast.gif";
import ScoreBar from "./ScoreBar";

const RockPaper = ({ setCurrentGame }) => {
  const [isDesiding, setIsDesiding] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [computerDesicion, setComputerDesicion] = useState(0);
  const [userDesicion, setUserDesicion] = useState(0);
  const [winner, setWinner] = useState("");
  const [userPoint, setUserPoint] = useState(0);
  const [computerPoint, setComputerPoint] = useState(0);

  const fireSound = new Howl({
    src: [smash],
  });

  const options = [
    {
      name: "rock",
      classes: "-left-3 top-1",
      img: rock,
      rightImg: rockR,
      leftImg: rockL,
      key: "J",
    },
    {
      name: "paper",
      classes: "top-1",
      img: paper,
      rightImg: paperR,
      leftImg: paperL,
      key: "K",
    },
    {
      name: "scissor",
      classes: "-right-2",
      img: scissor,
      rightImg: scissorR,
      leftImg: scissorL,
      key: "L",
    },
  ];

  const playAudio = () => {
    Howler.volume(0.2);
    fireSound.play();
  };

  const startGame = (i, isToPlayAudio) => {
    setIsDesiding(true);
    setComputerDesicion(0);
    setUserDesicion(0);
    setTimeout(() => {
      const random = Math.floor(Math.random() * 3);
      setComputerDesicion(random);
      setUserDesicion(i);

      if (random === 0 && i === 1) {
        setWinner("user");
        setUserPoint(userPoint + 1);
      } else if (random === 1 && i === 0) {
        setWinner("computer");
        setComputerPoint(computerPoint + 1);
      } else if (random === 2 && i === 0) {
        setWinner("user");
        setUserPoint(userPoint + 1);
      } else if (random === 0 && i === 2) {
        setWinner("computer");
        setComputerPoint(computerPoint + 1);
      } else if (random === 1 && i === 2) {
        setWinner("user");
        setUserPoint(userPoint + 1);
      } else if (random === 2 && i === 1) {
        setWinner("computer");
        setComputerPoint(computerPoint + 1);
      } else if (random === i) {
        setWinner("draw");
      } else {
        setWinner("");
      }
      if (isToPlayAudio) {
        playAudio();
      }

      setTimeout(() => {
        setIsDesiding(false);
      }, 700);
    }, 1250);

    setTimeout(() => {
      setComputerDesicion(0);
      setUserDesicion(0);
    }, 2300);
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "j" && !isDesiding) {
      startGame(0, false);
    } else if (e.key === "k" && !isDesiding) {
      startGame(1, false);
    } else if (e.key === "l" && !isDesiding) {
      startGame(2, false);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setWinner("");
    }, 1000);
  }, [winner]);

  return (
    <>
      <div className="w-full px-10 md:px-15 lg:px-56 pt-5">
        <div className="rounded-xl py-4 bg-neutral-900 text-white relative">
          <button
            className="w-14 h-14 flex items-center justify-center text-xl text-white rounded-full border-2 border-white bg-red-500 hover:bg-red-600 transition-all absolute -top-7 -right-7"
            onClick={() => setCurrentGame(null)}
          >
            <ImCross />
          </button>
          <div className="overflow-hidden">
            {(computerPoint === 5 || userPoint === 5) && (
              <div className="absolute top-0 right-0 left-0 bottom-0 m-auto rounded-lg p-4 w-96 bg-neutral-700 h-64 flex items-center justify-center">
                <div>
                  <h1 className="text-3xl text-center">
                    {computerPoint === 5
                      ? "বিজয়ী: শেখ রাসেল"
                      : "তুমি জয়ী হয়েছো"}
                  </h1>
                  <br />
                  <h1 className="text-xl">রাসেল: {computerPoint}</h1>
                  <h1 className="text-xl">তুমি: {userPoint}</h1>
                  <br />
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      className="w-14 h-14 flex items-center justify-center text-xl text-white rounded-full border-2 border-white bg-indigo-500 hover:bg-indigo-600 transition-all"
                      onClick={() => {
                        setComputerPoint(0);
                        setUserPoint(0);
                      }}
                    >
                      <AiOutlineReload />
                    </button>
                    <button
                      className="w-14 h-14 flex items-center justify-center text-xl text-white rounded-full border-2 border-white bg-red-500 hover:bg-red-600 transition-all"
                      onClick={() => setCurrentGame(null)}
                    >
                      <ImCross />
                    </button>
                  </div>
                </div>
              </div>
            )}
            <ScoreBar
              userPoint={userPoint}
              computerPoint={computerPoint}
              winner={winner}
            />
            <div className="h-[21rem] flex items-center justify-between">
              <div className="relative h-56">
                {winner === "computer" && (
                  <img
                    src={winner === "computer" && blast}
                    alt="Blast"
                    className="absolute top-0 right-0 left-0 bottom-0 m-auto w-70"
                  />
                )}
                <img
                  src={options[computerDesicion]?.leftImg || rockL}
                  alt="Left"
                  className={`${
                    isDesiding && "animate-left-hand"
                  } origin-left relative -bottom-10 -left-20 z-30`}
                />
              </div>
              <div className="relative h-56">
                {winner === "user" && (
                  <img
                    src={winner === "user" && blast}
                    alt="Blast"
                    className="absolute top-0 right-0 left-0 bottom-0 m-auto w-70"
                  />
                )}
                <img
                  src={options[userDesicion]?.rightImg || rockR}
                  alt="Right"
                  className={`${
                    isDesiding && "animate-right-hand"
                  } origin-right relative -bottom-10 -right-12 z-30`}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="relative">
                {isAboutOpen && (
                  <div
                    className="absolute bottom-16 left-12 bg-white p-4 rounded-t-lg rounded-br-xl text-black w-60 z-40"
                    onMouseOver={() => setIsAboutHovered(true)}
                    onMouseLeave={() => setIsAboutHovered(false)}
                  >
                    <span>✊: পাথর, ✋: কাগজ, ✌: কাঁচি।</span>
                    <br />
                    <p>
                      খেলার নিয়ম: বাস্তবে যেমন কাগজ পাথরকে মুড়িয়ে ফেলে, পাথরকে
                      ভেঙ্গে ফেলে, কাঁচি কাগজ কেটে ফেলে ঠিক তেমনি কেউ পাথর ও অপর
                      পক্ষ কাগজ করলে কাগজ পক্ষ জয়ী হবে।
                    </p>
                  </div>
                )}
                <button
                  className="w-14 h-14 flex items-center justify-center text-2xl text-white rounded-full border-2 border-white bg-sky-500 hover:bg-sky-600 transition-all m-5"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  onBlur={() => {
                    if (!isAboutHovered) {
                      setIsAboutOpen(false);
                    }
                  }}
                >
                  <AiOutlineQuestion />
                </button>
              </div>
              <div className="flex items-center justify-center space-x-6">
                {options.map((e, i) => {
                  return (
                    <div
                      className="flex flex-col items-center justify-center"
                      key={i}
                    >
                      <div
                        className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center overflow-hidden relative spin-bg"
                        onClick={() => {
                          if (!isDesiding) {
                            startGame(i, true);
                          }
                        }}
                      >
                        <img
                          src={e.img}
                          alt={e.name}
                          className={`relative grayscale z-30 ${e.classes}`}
                        />
                      </div>
                      <h1>{e.key} চাপুন</h1>
                    </div>
                  );
                })}
              </div>
              <div>
                <button
                  className="w-14 h-14 flex items-center justify-center text-xl text-white rounded-full border-2 border-white bg-green-500 hover:bg-green-600 transition-all m-5"
                  onClick={() => {
                    setComputerPoint(0);
                    setUserPoint(0);
                  }}
                >
                  <AiOutlineReload />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RockPaper;
