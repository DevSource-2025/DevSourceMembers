import logo from "./assets/acm_logo 1.svg";
import DevLogo from "./assets/DevSourceLogo.png";
import "./font.css";
import { useState } from "react";
import Selection from "./components/selection";
import BackGround from "./components/background";

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col absolute min-h-screen w-full p-4 box-border justify-center items-center bg-zinc-800 overflow-y-hidden">
      <BackGround className="relative -z-10" />
      <nav className="flex w-full justify-between items-center mb-8">
        <img
          src={logo || "/placeholder.svg"}
          className="w-16 h-16 md:w-20 md:h-20"
          alt="ACM Logo"
        />
        <h1 className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl Airnt">
          DevSource Members
        </h1>
        <img
          src={DevLogo || "/placeholder.svg"}
          className="w-20 h-16 md:w-24 md:h-20"
          alt="Dev Logo"
        />
      </nav>
      <div className="flex items-center justify-center flex-col w-full">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 mogiant text-center text-white mb-8 z-20">
          <button
            className={
              selected === 0
                ? "border-2 p-3 sm:p-4 rounded-lg bg-white text-red-500 border-black duration-200 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                : "border-2 border-white p-3 sm:p-4 rounded-lg hover:bg-white hover:text-red-500 hover:border-black duration-200 text-lg sm:text-xl md:text-2xl lg:text-3xl"
            }
            onClick={() => setSelected(0)}
          >
            Web
            <br />
            Developers
          </button>
          <button
            className={
              selected === 1
                ? "border-2 p-3 sm:p-4 rounded-lg bg-white text-sky-500 border-black duration-200 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                : "border-2 border-white p-3 sm:p-4 rounded-lg hover:bg-white hover:text-sky-500 hover:border-black duration-200 text-lg sm:text-xl md:text-2xl lg:text-3xl"
            }
            onClick={() => setSelected(1)}
          >
            Android
            <br />
            Developers
          </button>
          <button
            className={
              selected === 2
                ? "border-2 p-3 sm:p-4 rounded-lg bg-white text-green-500 border-black duration-200 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                : "border-2 border-white p-3 sm:p-4 rounded-lg hover:bg-white hover:text-green-500 hover:border-black duration-200 text-lg sm:text-xl md:text-2xl lg:text-3xl"
            }
            onClick={() => setSelected(2)}
          >
            Game
            <br />
            Developers
          </button>
        </div>
        <Selection selected={selected} />
      </div>
    </div>
  );
}

export default App;
