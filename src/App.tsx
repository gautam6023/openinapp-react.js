import { useState } from "react";
import "./App.css";
import SignIn from "./pages/SignIn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <SignIn />
      </div>
    </>
  );
}

export default App;
