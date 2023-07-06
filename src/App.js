import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");  
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#081a35";

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title="TextConvert" mode={mode} toggleMode={toggleMode}/>
      <Textarea heading="Enter the text below to Convert" mode={mode}/>
    </>
  );
}

export default App;
