import "./App.css";
import { useState } from "react";

function App() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
      <div className="max-w-[60ch] mx-auto w-full space-y-6 text-center">
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
        <div className="flex gap-4 justify-center">
          <a
            href="https://x.com/jogeshwar01"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
            target="_blank"
          >
            @jogeshwar01
          </a>
          <a
            href="https://github.com/jogeshwar01"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
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
