import "./App.css";
import Header from "./components/Header";
import LeftArea from "./components/LeftArea";
import RightArea from "./components/RightArea";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <LeftArea />
        <RightArea />
      </div>
    </div>
  );
}

export default App;
