import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../types/type";
import { TbTrash } from "react-icons/tb";

type SelectedPlayersProps = {
  balance: number;
  setBalance: Dispatch<SetStateAction<number>>;
  purchasedPlayers: PlayerType[];
  setPurchasedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
};

const SelectedPlayers = ({
  purchasedPlayers,
  setPurchasedPlayers,
  setBalance,
}: SelectedPlayersProps) => {
  const deleteButton = (uniqueKey: string) => {
    // Find the player that we want to delete
    const playerToDelete = purchasedPlayers.find(
      (player) => player.uniqueKey === uniqueKey
    );

    // If player doesn't exist, stop
    if (!playerToDelete) return;

    // Convert price to number
    const price = Number(
      String(playerToDelete.price).replace(/[$,]/g, "")
    );

    // Check if price is a valid number
    if (Number.isNaN(price)) {
      console.error("Invalid player price:", playerToDelete.price);
      return;
    }

    // Refund the player's price
    setBalance((prevBalance) => prevBalance + price);

    // Remove the player from purchased players
    setPurchasedPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.uniqueKey !== uniqueKey)
    );
  };

  return (
    <div>
      <div className="mt-6">
        {purchasedPlayers.map((player) => (
          <div
            key={player.uniqueKey}
            className="flex justify-between items-center border border-gray-200 rounded-xl p-4 mb-4 bg-white transition-all duration-300 hover:scale-101 hover:shadow-lg hover:border-gray-300"
          >
            {/* Left side: Image and Text */}
            <div className="flex items-center gap-4">
              <img
                src={player.PlayerImage}
                alt={player.playerName}
                className="w-20 h-20 mx-4 rounded-lg object-cover bg-gray-200"
              />

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {player.playerName}
                </h2>

                <p className="text-sm text-gray-500">
                  {player.origin}
                </p>

                <p className="text-sm font-medium text-gray-700">
                  Price: {player.price}
                </p>
              </div>
            </div>

            {/* Right side: Delete Button */}
            <button
              type="button"
              onClick={() => deleteButton(player.uniqueKey)}
              className="text-red-500 hover:text-red-700 cursor-pointer transition-colors"
            >
              <TbTrash size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedPlayers;