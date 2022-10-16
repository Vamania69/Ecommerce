
import "./App.css";
import Index from "./pages/home";
import { Registration } from "../src/components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Index />
      <Registration />
    </div>
  );
}

export default App;
