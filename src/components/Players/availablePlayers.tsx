import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../types/type";
import { FaUser, FaFlag } from "react-icons/fa";
import { toast } from "react-toastify";

type AvailablePlayerProps = {
  player: PlayerType[];
  balance: number;
  setBalance: Dispatch<SetStateAction<number>>;
  purchasedPlayers: PlayerType[];
  setPurchasedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
};

const AvailablePlayers = ({
  player,
  balance,
  setBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}: AvailablePlayerProps) => {
  
  // CHANGE 1: receive the selected player
  const handleSelectPlayer = (selectedPlayer: PlayerType) => {
    if (purchasedPlayers.length >= 11) {
      toast.error("Maximum limit reached! You can only select 11 players.");
      return; // Stop the function here so they don't get charged
    }
    const playerPrice = Number(
      String(selectedPlayer.price).replace("$", "").replace(/,/g, ""),
    );

    const newPlayerPrice = balance - playerPrice;

    if (newPlayerPrice >= 0) {
      setBalance(newPlayerPrice);

      setPurchasedPlayers((prev) => [...prev, selectedPlayer]);

      toast.success(`${selectedPlayer.playerName} purchased successfully!`);
    } else {
      toast.error("Insufficient Balance");
    }
  };

  if (!player || player.length === 0) {
    return <div className="text-center p-10">No players available.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {player.map((p) => {
          const {
            uniqueKey,
            PlayerImage,
            playerName,
            origin,
            battingStyle,
            bollingStyle,
            price,
          } = p;

          // CHANGE 3: use uniqueKey directly
          const cardKey = uniqueKey;

          // Dynamically check whether this player is in the global purchased array
          const isSelected = purchasedPlayers.some(
            (purchasedPlayer) => purchasedPlayer.uniqueKey === cardKey
          );

          return (
            <div
              key={cardKey}
              className="bg-white border border-gray-200 rounded-xl shadow-md  overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-gray-300"
            >
              <div className="h-64 w-full bg-gray-100 overflow-hidden">
                <img
                  src={PlayerImage}
                  alt={playerName}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-5 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <FaUser className="text-gray-500 text-lg" />
                      {playerName}
                    </h2>

                    <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full mt-2 font-semibold">
                      <FaFlag className="text-blue-600" />
                      {origin}
                    </span>
                  </div>

                  <div className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                    $
                    {typeof price === "string"
                      ? price.replace("$", "")
                      : price.toLocaleString()}
                  </div>
                </div>

                <div className="space-y-2 mt-auto text-sm text-gray-600 mb-5">
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="font-medium">Batting:</span>
                    <span>{battingStyle}</span>
                  </div>

                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="font-medium">Bowling:</span>
                    <span>{bollingStyle}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectPlayer(p)}
                  className={`w-full font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300 ${
                    isSelected
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                  disabled={isSelected}
                >
                  {isSelected ? "Selected" : "Choose Player"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;