import { Routes, Route, Navigate } from "react-router-dom";
import Players from "./pages/Players";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Players />} />
      <Route path="/players" element={<Players />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}