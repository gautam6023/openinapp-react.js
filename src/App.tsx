import "./App.css";
import SignIn from "./pages/SignIn";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
