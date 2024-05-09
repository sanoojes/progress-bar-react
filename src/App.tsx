import { useEffect, useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress > 99) return;
    const timer = setTimeout(() => {
      setProgress((prev) => prev + 1);
    }, 100);
    console.log(progress);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <>
      <main className="flex flex-col h-screen w-screen bg-neutral-950 text-neutral-50 items-center justify-center gap-4">
        <h1 className="text-xl font-bold">Progress Bar</h1>
        <div className="flex justify-center items-center relative w-9/12 h-6 bg-neutral-900 rounded-full shadow shadow-neutral-50 overflow-hidden">
          <span
            className="h-full rounded-full  bg-green-500 flex justify-center absolute top-0 left-0 transition-all duration-150 ease-linear
          "
            style={{ width: `${progress}%` }}
          ></span>
          <p className="text-base font-medium tracking-wider z-10 backdrop-invert-0">
            {progress}%
          </p>
        </div>
        <button
          className="flex px-4 py-2 border-2 border-neutral-800 bg-neutral-900 rounded-lg hover:bg-neutral-900/50 cursor-pointer"
          onClick={() => {
            setProgress(0);
          }}
        >
          Reset
        </button>
      </main>
    </>
  );
}

export default App;

