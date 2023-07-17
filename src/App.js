import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Pledge from "./pages/Pledge";
import Withdrawal from "./pages/Withdrawal";
import Stake from "./pages/Stake";
import { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setTxRecords } from "./redux/user/user.actions";

function App({ txRecords, setTxRecords }) {
  useEffect(() => {
    axios
      .get("https://nftfarm-production.up.railway.app/api/transactions/all")
      .then((res) => {
        console.log(res.data.transaction);
        setTxRecords(res.data.transaction);
      });
  }, []);
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

const mapStateToProps = (state) => ({
  txRecords: state.user.txRecords,
});

const mapDispatchToProps = (dispatch) => ({
  setTxRecords: (records) => dispatch(setTxRecords(records)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
