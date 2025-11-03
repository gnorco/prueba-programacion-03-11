import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Detalle from "./Components/Detalles";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
}
