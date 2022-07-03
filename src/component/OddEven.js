import React, { useEffect, useState } from "react";
import ScoreBar from "./ScoreBar";
import coin from "../media/coin.png";
import { FaQuestion, FaEllo } from "react-icons/fa";
import { AiOutlineQuestion, AiOutlineReload } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const OddEven = ({ setCurrentGame }) => {
  const [coinCount, setCoinCount] = useState(0);
  const [userPoint, setUserPoint] = useState(coinCount / 2 || 0);
  const [computerPoint, setComputerPoint] = useState(coinCount / 2 || 0);
  const [turn, setTurn] = useState("");
  const [userSelection, setUserSelection] = useState(0);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  useEffect(() => {
    if (coinCount !== 0) {
      setTurn("user");
    }
  }, [coinCount]);

  const verifyComputer = () => {
    if (turn === "computer") {
      const random = Math.round(Math.random() * computerPoint);
      const decision = random % 2 === 0 ? "জোড়" : "বিজোড়";

      if ((decision === userSelection % 2) === 0 ? "জোড়" : "বিজোড়") {
        setUserPoint(userPoint - userSelection);
        setComputerPoint(computerPoint + userSelection);
      } else {
        setUserPoint(userPoint + userSelection);
        setComputerPoint(computerPoint - userSelection);
      }
      setUserSelection(0);
      setTurn(turn === "computer" ? "user" : "computer");
    }
  };

  return (
    <>
      <div className="w-full px-10 md:px-15 lg:px-56 pt-5">
        <div className="h-[29rem] rounded-xl py-4 bg-neutral-900 text-white relative">
          <button
            className="w-14 h-14 flex items-center justify-center text-xl text-white rounded-full border-2 border-white bg-red-500 hover:bg-red-600 transition-all absolute -top-7 -right-7"
            onClick={() => setCurrentGame(null)}
          >
            <ImCross />
          </button>
          <div className="overflow-hidden">
            {(computerPoint <= 0 || userPoint <= 0) &&
              computerPoint !== 0 &&
              userPoint !== 0 && (
                <div className="absolute top-0 right-0 left-0 bottom-0 m-auto rounded-lg p-4 w-96 bg-neutral-700 h-64 flex items-center justify-center z-50">
                  <div>
                    <h1 className="text-3xl text-center">
                      {userPoint <= 0 ? "বিজয়ী: শেখ রাসেল" : "তুমি জয়ী হয়েছো"}
                    </h1>
                    <br />
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
            <ScoreBar userPoint={userPoint} computerPoint={computerPoint} />
            <div className="h-[16rem] flex items-center justify-between">
              {["computer", "user"].map((e) => {
                return (
                  <div
                    className={`w-44 relative p-3 ${
                      turn !== e && turn !== "" && "animate-bounce"
                    }`}
                    key={e}
                  >
                    <img src={coin} alt="Coin" className="w-full" />
                    <div className="absolute top-0 right-0 left-0 bottom-0 m-auto flex items-center justify-center text-yellow-600 text-7xl">
                      {turn === e ? (
                        <FaEllo className="absolute top-0 right-0 left-0 bottom-0 m-auto flex items-center justify-center text-yellow-600 text-7xl animate-spin" />
                      ) : (
                        <FaQuestion className="absolute top-0 right-0 left-0 bottom-0 m-auto flex items-center justify-center text-yellow-600 text-7xl" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {!coinCount && (
              <>
                <div className="flex items-center justify-center space-x-6">
                  {[30, 40, 50].map((e, i) => {
                    return (
                      <div
                        className="flex flex-col items-center justify-center cursor-pointer"
                        key={i}
                        onClick={() => {
                          setCoinCount(e);
                          setUserPoint(e / 2);
                          setComputerPoint(e / 2);
                        }}
                      >
                        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center overflow-hidden relative spin-bg">
                          <p className="z-30 text-white font-bold text-3xl drop-shadow-lg">
                            {e}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <h1 className="text-center m-3 text-xl">
                  কয়েন সংখ্যা নির্বাচন কর
                </h1>
              </>
            )}
            <div className="absolute bottom-0 left-0 z-50">
              {isAboutOpen && (
                <div
                  className="absolute bottom-16 left-12 bg-white p-4 rounded-t-lg rounded-br-xl text-black w-60 z-40 h-44 overflow-auto"
                  onMouseOver={() => setIsAboutHovered(true)}
                  onMouseLeave={() => setIsAboutHovered(false)}
                >
                  <p>
                    তোমার নির্বাচিত সংখ্যা রাসেল ও তোমার মধ্যে ভাগ করে দেয়া হবে।
                    এরপর রাসেল মনে মনে একটি সংখ্যা নিবে যা তার কয়েন এর কম।
                    তোমাকে বলতে হবে তা জোড় না বিজোড়। যদি তুমি সঠিক বল তাহলে সেই
                    সংখ্যক কয়েন পাবে। একইভাবে তোমাকে প্রশ্ন করতে হবে।
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

            {turn === "user" ? (
              <>
                <div className="flex items-center justify-center space-x-6">
                  {["জোড়", "বিজোড়"].map((e, i) => {
                    return (
                      <div
                        className={`flex flex-col items-center justify-center cursor-pointer ${
                          turn === "computer" && "opacity-50 cursor-not-allowed"
                        }`}
                        key={i}
                        onClick={() => {
                          // setUserDecision(e);
                          if (turn !== "computer") {
                            setTurn(turn === "computer" ? "user" : "computer");
                            const random = Math.round(
                              Math.random() * computerPoint
                            );
                            const decision = random % 2 === 0 ? "জোড়" : "বিজোড়";
                            if (decision === e) {
                              setUserPoint(userPoint + random);
                              setComputerPoint(computerPoint - random);
                            } else {
                              setUserPoint(userPoint - random);
                              setComputerPoint(computerPoint + random);
                            }
                            // verifyComputer();
                          }
                        }}
                      >
                        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center overflow-hidden relative spin-bg">
                          <p className="z-30 text-white font-bold text-lg drop-shadow-lg">
                            {e}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {turn === "user" && (
                  <h1 className="text-center m-3 text-xl">
                    জোড় বিজোড় নির্বাচন কর
                  </h1>
                )}
              </>
            ) : turn === "computer" ? (
              <>
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center w-full">
                    <span className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-100 relative left-2 z-10 text-green-700 text-xl font-bold">
                      {userSelection}
                    </span>
                    <input
                      type="range"
                      name="Somehting"
                      id="something"
                      min="0"
                      max={userPoint}
                      className="num-slider w-full bg-gray-100 z-20"
                      onChange={(e) =>
                        setUserSelection(parseInt(e.target.value))
                      }
                    />
                  </div>
                  <button
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-3 mx-2 rounded-lg w-max whitespace-nowrap"
                    onClick={verifyComputer}
                  >
                    প্রশ্ন করুন
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OddEven;
