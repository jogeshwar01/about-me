import "./App.css";
import { useState } from "react";

function App() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
      <div className="max-w-[60ch] mx-auto w-full text-center text-[18px]">
        <h1
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="relative h-[2em] overflow-hidden inline-block"
        >
          <span
            className="block transition-transform duration-300"
            style={{
              transform: hovering ? "translateY(-100%)" : "translateY(0)",
            }}
          >
            Jogeshwar Singh
          </span>
          <span
            className="block absolute top-full left-0 transition-transform duration-300"
            style={{
              transform: hovering ? "translateY(-100%)" : "translateY(0)",
            }}
          >
            jogeshwar01
          </span>
        </h1>

        <div className="text-[14px] text-gray-500 dark:text-gray-400  mb-[25px]">
          I'm a builder, engineer, and crypto guy, interested in exchange
          engineering and web3 infrastructure.
        </div>

        <div className="w-48 h-[1px] bg-gray-300 dark:bg-gray-700 mx-auto"></div>

        <div className="flex gap-6 justify-center mt-[25px] text-[14px]">
          <a
            href="https://x.com/jogeshwar01"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200 flex items-center gap-2"
            target="_blank"
          >
            @jogeshwar01
          </a>
          <a
            href="https://github.com/jogeshwar01"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200 flex items-center gap-2"
            target="_blank"
          >
            github
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
