import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PageHome } from "./pages/PageHome";
import { PageRegister } from "./pages/PageRegister";
import { PageMentor } from "./pages/PageMentor";
import { PageSchedule } from "./pages/PageSchedule";
import { PageFindMentor } from "./pages/PageFindMentor";

// STYLES
import "./global/reset.css";

function App() {
  return (
    <Router>
      <Link to="/home" aria-label="Página inicial" />
      <Link to="/register" aria-label="Register" />
      <Link to="/findMentor" aria-label="Encontre um mentor" />
      <Link to="/schedule" aria-label="Cronagrama" />
      <Link to="/mentor" aria-label="Página do mentor" />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="register" element={<PageRegister />} />
        <Route path="findMentor" element={<PageFindMentor />} />
        <Route path="schedule" element={<PageSchedule />} />
        <Route path="mentor" element={<PageMentor />} />
      </Routes>
    </Router>
  );
}

export default App;
