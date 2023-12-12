
import Home from "./Home";
import Detail from "./Detail";
import { Route, Router, Routes } from "react-router";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
