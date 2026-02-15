import "./App.css";
import Fixtures from "./sports/Fixtures";

function App() {
  return (
    <div className="bg-yellow-50 min-h-screen w-full overflow-hidden p-10">
      <h1 className="font-sans font-bold text-black mb-10">
        mattrowling.
        <a href="https://www.hello.kiwi/why-dotkiwi" target="_blank">
          🥝
        </a>
      </h1>
      <Fixtures />
    </div>
  );
}

export default App;
