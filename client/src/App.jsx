
import Home from "./Home";
import Detail from "./Detail";
import { Route, Router, Routes } from "react-router";
import RegisterPage from "./RegisterPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
