import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { Suspense, useState } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const availableBtn = () => {
    setToggle(true);
    console.log("True");
  };
  const selectedBtn = () => {
    setToggle(false);
    console.log("False");
  };
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="flex items-center justify-between max-w-[1300px] mx-auto">
        <h2 className="text-2xl font-bold text-gray-900">Available Players</h2>
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
            Selected <span>0</span>
          </button>
        </div>
      </div>
      {toggle ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner text-neutral w-[50px]"></span>
          }
        >
          <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
