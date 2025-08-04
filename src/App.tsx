import "./App.css";
import Minesweeper from "./components/Minesweeper";

function App() {
  return (
    <>
      <div className="bg-yellow-50 min-h-screen min-w-screen">
        <h1 className="font-sans font-bold text-black p-5">
          mattrowling.
          <a href="https://www.hello.kiwi/why-dotkiwi" target="_blank">
            🥝
          </a>
        </h1>
        <Minesweeper />
      </div>
    </>
  );
}

export default App;
