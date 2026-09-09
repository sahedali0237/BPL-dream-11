import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../types/type";
import AvailablePlayers from "./availablePlayers";
import SelectedPlayers from "./selectedPlayers";

type PlayerProps = {
  playersPromise: Promise<PlayerType[]>;
  balance: number;
  setBalance: Dispatch<SetStateAction<number>>;
  purchasedPlayers: PlayerType[];
  setPurchasedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
};

const Player = ({
  playersPromise,
  balance,
  setBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}: PlayerProps) => {
  const players = use(playersPromise);

  const [buttonType, setButtonType] = useState<"available" | "selected">(
    "available",
  );

  const handleButtonUpdate = (type: "available" | "selected") => {
    setButtonType(type);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {buttonType === "available"
              ? "All Available Players"
              : purchasedPlayers.length > 0
                ? `All Selected Players (${purchasedPlayers.length}/11)`
                : "No Selected Yet...!"}
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Browse and select players for your team.
          </p>
        </div>

        <div className="flex rounded-lg border border-gray-200 bg-gray-50 p-1">
          <button
            type="button"
            onClick={() => handleButtonUpdate("available")}
            className={`rounded-md px-4 py-2 text-sm font-medium shadow-sm transition ${
              buttonType === "available"
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-white text-gray-600 hover:text-gray-900"
            }`}
          >
            Available
          </button>

          <button
            type="button"
            onClick={() => handleButtonUpdate("selected")}
            className={`rounded-md px-4 py-2 text-sm font-medium transition ${
              buttonType === "selected"
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-white text-gray-600 hover:text-gray-900"
            }`}
          >
            Selected
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        {buttonType === "available" ? (
          <AvailablePlayers
            player={players}
            balance={balance}
            setBalance={setBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          />
        ) : (
          <SelectedPlayers
            balance={balance}
            setBalance={setBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          />
        )}
      </div>
    </div>
  );
};

export default Player;