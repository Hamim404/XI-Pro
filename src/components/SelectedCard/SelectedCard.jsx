import deleteIcon from "../../assets/delete.png";

function SelectedCard({ selectedCard, removePlayer }) {
  const handleRemove = () => {
    removePlayer(selectedCard);
  };

  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-4">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Player Image */}
        <div className="h-[53px] w-[53px] rounded-xl bg-gray-300">
          <img
            className="rounded-lg"
            src={selectedCard["player-image"]}
            alt=""
          />
        </div>

        {/* Player Info */}
        <div>
          <h3 className="text-[16px] font-semibold text-gray-900">
            {selectedCard["player-name"]}
          </h3>

          <p className="mt-1 text-[12px] text-gray-500">
            {selectedCard["playing-role"]}
          </p>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={handleRemove}
        className="cursor-pointer text-red-500 hover:text-red-600"
      >
        <img src={deleteIcon} className="w-7" alt="" />
      </button>
    </div>
  );
}

export default SelectedCard;
