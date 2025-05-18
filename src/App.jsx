import "./App.css";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
