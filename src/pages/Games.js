import React, { useState } from "react";
import RockPaper from "../component/RockPaper";
import rockPaperGame from "../media/rock-paper.jpg";

const Games = () => {
  const [currentGame, setCurrentGame] = useState(null);
  const games = [
    {
      name: "শিলা কাগজ কাঁচি",
      img: rockPaperGame,
      component: <RockPaper setCurrentGame={setCurrentGame} />,
    },
  ];

  return (
    <>
      <div className="max-w-full py-5 bg-gray-100">
        <h1 className="mt-3 mb-1 text-center text-4xl font-bold text-stroke text-underline-1">
          রাসেলের সাথে খেলি
        </h1>
        {currentGame === 0 && games[0].component}
        <div className="p-6 grid grid-cols-5">
          {games.map((g, i) => {
            return (
              <div
                className="p-4 bg-white rounded-lg cursor-pointer"
                onClick={() => {
                  setCurrentGame(i);
                }}
                key={i}
              >
                <img src={g.img} alt={g.name} className="w-full" />
                <h1 className="text-center mt-2 text-xl">{g.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Games;
