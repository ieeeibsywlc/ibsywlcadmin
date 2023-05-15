import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
