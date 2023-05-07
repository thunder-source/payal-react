import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import AboutUsScreen from "./screen/AboutUsScreen";

function App() {
  return (
    <div className="App overflow-x-hidden overflow-y-auto">
      <Routes>
        <Route path="*" element={<Navigate to={"/"} />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutUsScreen />} />
      </Routes>
    </div>
  );
}

export default App;
