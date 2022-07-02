import React from "react";
import coin from "../media/coin.png";
import { AiFillStar } from "react-icons/ai";

const ScoreBar = ({ computerPoint, winner, userPoint }) => {
  return (
    <>
      <div className="px-5 flex justify-between items-center">
        <div>
          <h1 className="text-3xl">রাসেল</h1>
          <h1 className="text-2xl text-center flex items-center space-x-2">
            <div className="div w-4 relative">
              <img src={coin} alt="Coin" className="w-4" />
              <AiFillStar className="absolute top-0 right-0 left-0 bottom-0 m-auto flex items-center justify-center text-yellow-600 text-xs" />
            </div>
            <span>{computerPoint || 0}</span>
          </h1>
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
          <h1 className="text-2xl text-center flex items-center space-x-2">
            <div className="div w-4 relative">
              <img src={coin} alt="Coin" className="w-4" />
              <AiFillStar className="absolute top-0 right-0 left-0 bottom-0 m-auto flex items-center justify-center text-yellow-600 text-xs" />
            </div>
            <span>{userPoint || 0}</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default ScoreBar;
