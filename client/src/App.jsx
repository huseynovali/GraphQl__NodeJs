
import Home from "./Home";
import Detail from "./Detail";
import { Route, Router, Routes } from "react-router";
import RegisterPage from "./RegisterPage";
import UpdateUserForm from "./UpdatePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/update" element={<UpdateUserForm />} />
      </Routes>
    </div>
  );
}

export default App;
