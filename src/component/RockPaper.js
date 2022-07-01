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
import fire from "../media/1.wav";
import { ImCross } from "react-icons/im";
import { AiOutlineReload } from "react-icons/ai";
import blast from "../media/blast.gif";

const RockPaper = ({ setCurrentGame }) => {
  const [isDesiding, setIsDesiding] = useState(false);
  const [computerDesicion, setComputerDesicion] = useState(0);
  const [userDesicion, setUserDesicion] = useState(0);
  const [winner, setWinner] = useState("");
  const [userPoint, setUserPoint] = useState(0);
  const [computerPoint, setComputerPoint] = useState(0);

  const fireSound = new Howl({
    src: [fire],
  });
  // const winSound = new Howl({
  //   src: [win],
  // });

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
  Howler.volume(0.2);

  const startGame = (i) => {
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
      fireSound.play();

      setTimeout(() => {
        setIsDesiding(false);
        // if (userPoint === 5 || computerPoint === 5) {
        //   winSound.play();
        // }
      }, 700);
    }, 1250);
    setTimeout(() => {
      setComputerDesicion(0);
      setUserDesicion(0);
    }, 2400);
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "j" && !isDesiding) {
      startGame(0);
    } else if (e.key === "k" && !isDesiding) {
      startGame(1);
    } else if (e.key === "l" && !isDesiding) {
      startGame(2);
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
        <div className="rounded-xl py-4 bg-neutral-900 text-white overflow-hidden relative">
          {(computerPoint === 5 || userPoint === 5) && (
            <div className="absolute top-0 right-0 left-0 bottom-0 m-auto rounded-lg p-4 w-96 bg-neutral-700 h-64 flex items-center justify-center">
              <div>
                <h1 className="text-3xl text-center">
                  {computerPoint === 5 ? "বিজয়ী: শেখ রাসেল" : "তুমি জয়ী হয়েছো"}
                </h1>
                <br />
                <h1 className="text-xl">রাসেল: {computerPoint}</h1>
                <h1 className="text-xl">তুমি: {userPoint}</h1>
                <br />
                <div className="flex items-center justify-center space-x-4">
                  <button
                    className="w-14 h-14 flex items-center justify-center text-xl text-white rounded-full border-2 border-white bg-green-600 hover:bg-green-700 transition-all"
                    onClick={() => {
                      setComputerPoint(0);
                      setUserPoint(0);
                    }}
                  >
                    <AiOutlineReload />
                  </button>
                  <button
                    className="w-14 h-14 flex items-center justify-center text-xl text-white rounded-full border-2 border-white bg-indigo-500 hover:bg-indigo-600 transition-all"
                    onClick={() => setCurrentGame(null)}
                  >
                    <ImCross />
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="px-5 flex justify-between items-center">
            <div>
              <h1 className="text-3xl">রাসেল</h1>
              <h1 className="text-2xl text-center">{computerPoint}</h1>
            </div>
            <div className="text-3xl">
              {winner === "computer"
                ? "বিজয়ী: রাসেল"
                : winner === "user"
                ? "বিজয়ী: তুমি"
                : winner === "draw"
                ? "স্থগিত"
                : ""}
            </div>
            <div>
              <h1 className="text-3xl">তুমি</h1>
              <h1 className="text-2xl text-center">{userPoint}</h1>
            </div>
          </div>
          <div className="h-[25rem] flex items-center justify-between">
            <div className="relative">
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
                } origin-left relative top-5 -left-20 z-30`}
              />
            </div>
            <div className="relative">
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
                } origin-right relative top-5 -right-12 z-30`}
              />
            </div>
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
                        startGame(i);
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
        </div>
      </div>
    </>
  );
};

export default RockPaper;