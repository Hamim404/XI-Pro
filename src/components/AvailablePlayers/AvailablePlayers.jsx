import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

function AvailablePlayers({ playersPromise, setAvailableBalance, availableBalance,purchasedPlayers,setPurchasedPlayers }) {
  const data = use(playersPromise);

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((card, index) => (
          <PlayerCard purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} card = {card} key={index}></PlayerCard>
        ))}
      </div>
    </div>
  );
}

export default AvailablePlayers;
