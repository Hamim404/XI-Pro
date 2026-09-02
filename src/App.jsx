import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { Suspense } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  const availableBtn = () => {
    console.log("Available");
  };
  const selectedBtn = () => {
    console.log("Selected");
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-center justify-between max-w-[1300px] mx-auto">
        <h2 className="text-2xl font-bold text-gray-900">Available Players</h2>
        <div className="flex items-center rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={availableBtn}
            className="px-5 py-2.5 bg-green-600 text-white text-sm font-semibold cursor-pointer"
          >
            Available
          </button>

          <button
            onClick={selectedBtn}
            className="px-5 py-2.5 bg-white text-gray-500 text-sm font-medium cursor-pointer"
          >
            Selected <span>0</span>
          </button>
        </div>
      </div>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-neutral"></span>
        }
      >
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
