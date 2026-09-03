import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(30000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(
      (ply) => ply["player-name"] !== p["player-name"],
    );
    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + p["price"]);
  };

  const availableBtn = () => {
    setToggle(true);
  };
  const selectedBtn = () => {
    setToggle(false);
  };
  return (
    <>
      <Navbar purchasedPlayers={purchasedPlayers} availableBalance={availableBalance}></Navbar>
      <div className="flex items-center justify-between max-w-[1300px] mx-auto">
        <h2 className="text-2xl font-bold text-gray-900">
          {toggle
            ? "Available Players"
            : `Selected Players ${purchasedPlayers.length}/6`}
        </h2>
        <div className="flex items-center rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={availableBtn}
            className={`px-5 py-2.5 ${toggle ? "bg-green-600 text-white" : "bg-white text-gray-500"}
             text-sm font-medium cursor-pointer`}
          >
            Available
          </button>

          <button
            onClick={selectedBtn}
            className={`px-5 py-2.5 ${!toggle ? "bg-green-600 text-white" : "bg-white text-gray-500"}
             text-sm font-medium cursor-pointer`}
          >
            Selected <span>{purchasedPlayers.length}</span>
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
      {toggle ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner text-neutral w-[50px]"></span>
          }
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
    </>
  );
}

export default App;
