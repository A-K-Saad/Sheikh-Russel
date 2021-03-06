import React, { useState } from "react";
import RockPaper from "../component/RockPaper";
import rockPaperGame from "../media/rock-paper.jpg";
import oddEven from "../media/odd-even.jpg";
import OddEven from "../component/OddEven";

const Games = () => {
  const [currentGame, setCurrentGame] = useState(null);
  const games = [
    {
      name: "শিলা কাগজ কাঁচি",
      img: rockPaperGame,
      component: <RockPaper setCurrentGame={setCurrentGame} />,
    },
    {
      name: "জোড় বিজোড়",
      img: oddEven,
      component: <OddEven setCurrentGame={setCurrentGame} />,
    },
  ];

  return (
    <>
      <div className="max-w-full py-5 bg-gray-100" id="games">
        <h1 className="mt-3 mb-1 text-center text-xl md:text-4xl font-bold text-stroke text-underline-1">
          রাসেলের সাথে খেলি
        </h1>
        {currentGame === 0 && games[0].component}
        {currentGame === 1 && games[1].component}
        <div className="p-6 grid grid-cols-1 md:grid-cols-5 gap-4">
          {games.map((g, i) => {
            return (
              <div
                className="p-4 bg-white rounded-lg cursor-pointer"
                onClick={() => {
                  setCurrentGame(i);
                }}
                key={i}
              >
                <img
                  src={g.img}
                  alt={g.name}
                  className="w-full border rounded-md"
                />
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
