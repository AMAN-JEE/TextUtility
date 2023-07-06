import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { useState } from "react";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    <Router>
      <Navbar title="TextConvert" mode={mode} toggleMode={toggleMode} />
      <Switch>
        <Route path="/">
          <Textarea heading="Enter the text below to Convert" mode={mode} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
