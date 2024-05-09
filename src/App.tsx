import { useEffect, useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress > 99) return;
    if (progress > 99) setProgress(100);
    const timer = setTimeout(() => {
      setProgress((prev) => prev + 1);
    }, 100);
    console.log(progress);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <>
      <button
        type="button"
        className="absolute top-4 right-2 bg-neutral-900 hover:bg-neutral-800 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 transition-colors z-50"
        onClick={() => {
          open(
            `https://github.com/sanoojes` + import.meta.env.BASE_URL,
            "SingleSecondaryWindowName"
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="2rem"
          height="2rem"
          fill="#fff"
        >
          <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
        </svg>
      </button>
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

