import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detalle from "./Detalles";

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
