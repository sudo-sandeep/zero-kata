// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useSound from "use-sound";
import yesSound from "../assets/sound/yes.mp3";

import { useState, useEffect } from "react";
import GameBoard from "../components/game-board";
import winningGif from "../assets/gif/winner.gif";

const Game = () => {
  const [playSound] = useSound(yesSound);
  const [game, setGame] = useState(Array(9).fill(undefined));
  const [currentPlayer, setCurrentPlayer] = useState("o");
  const [xscore, setXscore] = useState<number[]>([]);
  const [yscore, setYscore] = useState<number[]>([]);
  const [winner, setWinner] = useState<string | undefined>(undefined);

  const winningScenarios = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const playerColor =
    currentPlayer === "o"
      ? "text-cyan-400"
      : currentPlayer === "x" && "text-red-600";

  const toggleCurrentPlayer = () => {
    setCurrentPlayer((prev) => {
      if (prev === "x") {
        return "o";
      }
      return "x";
    });
  };

  const checkWinner = () => {
    winningScenarios.map((scene) => {
      if (scene.every((ele) => xscore.includes(ele))) {
        setWinner("o");
        toggleCurrentPlayer();
        playSound();
      }
    });
    winningScenarios.map((scene) => {
      if (scene.every((ele) => yscore.includes(ele))) {
        setWinner("x");
        toggleCurrentPlayer();
        playSound();
      }
    });
  };

  useEffect(() => {
    if (xscore.length !== 0 && yscore.length !== 0) {
      checkWinner();
    }
  }, [xscore, yscore]);

  const scoring = ({
    value,
    position,
  }: {
    value: string | undefined;
    position: number;
  }) => {
    if (value === "o") {
      setXscore([...xscore, position]);
    } else if (value === "x") {
      setYscore([...yscore, position]);
    }
  };

  const setCell = ({
    position,
    player,
  }: {
    position: number;
    player: string | undefined;
  }) => {
    let newBoard = game;
    newBoard[position] = player;
    setGame(newBoard);
  };

  const playAgain = () => {
    setCurrentPlayer("o");
    setXscore([]);
    setYscore([]);
    setGame(Array(9).fill(undefined));
    setWinner(undefined);
  };

  return (
    <>
      <div className="absolute w-full h-full bg-white left-0 top-0"></div>
      <div className="relative z-10 w-full h-full">
        <h1 className="py-5 font-semibold text-4xl capitalize">Zero Kata</h1>
        {winner ? (
          <div className="max-w-xs p-5 mx-auto">
            <img src={winningGif} alt="winner" />
          </div>
        ) : (
          <GameBoard
            game={game}
            setCell={setCell}
            currentPlayer={currentPlayer}
            toggleCurrentPlayer={toggleCurrentPlayer}
            scoring={scoring}
          />
        )}

        {winner ? (
          <div>
            <div className="flex w-full justify-center items-baseline">
              <h2
                className={`text-4xl font-semibold font-mono mr-2 ${playerColor} inline-block`}
              >
                {winner}
              </h2>
              is the Winner!
            </div>
            <button
              className="bg-lime-300 text-white px-5 py-2 mt-3 hover:bg-lime-400 transition-colors duration-300 ease-in-out"
              onClick={playAgain}
            >
              Play Again
            </button>
          </div>
        ) : (
          <h2 className="py-5 text-2xl">
            Current Player :{" "}
            <span className={`font-semibold uppercase ${playerColor}`}>
              {currentPlayer}
            </span>
          </h2>
        )}
      </div>
    </>
  );
};

export default Game;
