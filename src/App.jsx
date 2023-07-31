import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Table";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Routes>
        <Route path="/personal" element={<Table />} />
      </Routes>
    </>
  );
}

export default App;
