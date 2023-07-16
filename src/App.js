import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Pledge from "./pages/Pledge";
import Withdrawal from "./pages/Withdrawal";
import Stake from "./pages/Stake";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Withdrawal />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
        </Routes>
        {/* <MainDash /> */}
        {/* <RightSide/> */}
      </div>
    </div>
  );
}

export default App;
