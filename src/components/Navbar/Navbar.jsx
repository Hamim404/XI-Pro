import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/dollar-coin.png";
function Navbar({availableBalance}) {
  return (
    <div className="navbar max-w-[1300px] mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img src={navImg} className="w-12" alt="" />
        </a>
      </div>
      <div className="flex-none">
        <div className="border-1 border-gray-700 border-solid p-2 flex gap-1 items-center">
          <span>{availableBalance}</span> Coin
          <img src={dollarImg} className="w-10" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
