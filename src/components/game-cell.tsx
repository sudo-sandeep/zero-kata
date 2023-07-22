// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useSound from "use-sound";
import clickSound from "../assets/sound/sound.mp3";

type Props = {
  value: string | undefined;
  currentPlayer: string | undefined;
  position: number;
  setCell: ({
    position,
    player,
  }: {
    position: number;
    player: string | undefined;
  }) => void;
  toggleCurrentPlayer: () => void;
  scoring: ({
    value,
    position,
  }: {
    value: string | undefined;
    position: number;
  }) => void;
};

const GameCell = ({
  value,
  currentPlayer,
  position,
  setCell,
  toggleCurrentPlayer,
  scoring,
}: Props) => {
  const [playSound] = useSound(clickSound);

  const handleClick = () => {
    playSound();
    setCell({ position, player: currentPlayer });
    toggleCurrentPlayer();
    scoring({ value: currentPlayer, position: position });
  };
  const gridColoring = value
    ? value === "o"
      ? "bg-cyan-400 text-white"
      : value === "x" && "bg-red-600 text-white"
    : `bg-white hover:before:content-['${currentPlayer}']`;
  return (
    <button
      className={`h-16 text-2xl md:h-28 md:text-6xl font-bold grid place-items-center uppercase cursor-pointer ${gridColoring}`}
      onClick={handleClick}
      type="button"
      disabled={value ? true : false}
    >
      {value}
    </button>
  );
};

export default GameCell;
