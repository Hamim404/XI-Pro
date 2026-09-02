import { use } from "react";
import avatarImg from "../../assets/avatar.png";

function AvailablePlayers({ playersPromise }) {
  const data = use(playersPromise);

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="w-full h-64 bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={card["player-image"] || avatarImg}
                alt={card["player-name"]}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <h2 className="text-xl font-bold text-gray-900">
                {card["player-name"]}
              </h2>

              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                ⭐ {card.rating}
              </span>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <span className="text-gray-500 text-sm">
                🌍 {card["player-country"]}
              </span>

              <span className="text-gray-500 text-sm">
                • {card["playing-role"]}
              </span>
            </div>

            <div className="border-t border-gray-100 my-4" />

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Batting</span>
                <span className="font-medium text-gray-800">
                  {card["batting-style"]}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Bowling</span>
                <span className="font-medium text-gray-800 text-right">
                  {card["bowling-style"]}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-100 my-4" />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Price</p>
                <p className="text-lg font-bold text-gray-900">
                  ৳{card.price.toLocaleString()}
                </p>
              </div>

              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg transition">
                Choose Player
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailablePlayers;
