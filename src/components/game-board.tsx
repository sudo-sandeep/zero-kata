type Props = {
  setCell: ({
    position,
    player,
  }: {
    position: number;
    player: string | undefined;
  }) => void;
  game: string[];
  currentPlayer: string;
  toggleCurrentPlayer: () => void;
  scoring: ({
    value,
    position,
  }: {
    value: string | undefined;
    position: number;
  }) => void;
};

import GameCell from "./game-cell";

const GameBoard = ({
  setCell,
  currentPlayer,
  toggleCurrentPlayer,
  game,
  scoring,
}: Props) => {
  return (
    <div className="max-w-xs md:max-w-md bg-black mx-auto grid grid-cols-3 gap-4 p-4">
      {game.map((value, index) => (
        <GameCell
          value={value}
          currentPlayer={currentPlayer}
          setCell={setCell}
          position={index}
          key={index}
          toggleCurrentPlayer={toggleCurrentPlayer}
          scoring={scoring}
        />
      ))}
    </div>
  );
};

export default GameBoard;
