import SelectedCard from "../SelectedCard/SelectedCard";
function SelectedPlayers({ purchasedPlayers, removePlayer }) {
  console.log(purchasedPlayers);

  return (
    <div className="max-w-[1300px] mx-auto">
      {purchasedPlayers.map((selectedCard,index) => (
        <SelectedCard removePlayer={removePlayer} key={index} selectedCard={selectedCard}></SelectedCard>
      ))}
      <button className="mt-8 rounded-xl border bg-green-600 hover:bg-green-700 border-none font-bold p-1 cursor-pointer">
        <span className="block rounded-lg  border-none px-3.5 py-2 text-[12px text-white">
          Add More Player
        </span>
      </button>
    </div>
  );
}

export default SelectedPlayers;
