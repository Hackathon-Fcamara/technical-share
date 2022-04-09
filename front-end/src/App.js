import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PageHome } from "./pages/PageHome";
import { PageLogin } from "./pages/PageLogin";
import { PageMentor } from "./pages/PageMentor";
import { PageSchedule } from "./pages/PageSchedule";
import { PageFindMentor } from "./pages/PageFindMentor";

// STYLES
import "./global/reset.css";

function App() {
  return (
    <Router>
      <Link to="/home" />
      <Link to="/login" />
      <Link to="/findMentor" />
      <Link to="/schedule" />
      <Link to="/mentor" />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="login" element={<PageLogin />} />
        <Route path="findMentor" element={<PageFindMentor />} />
        <Route path="schedule" element={<PageSchedule />} />
        <Route path="mentor" element={<PageMentor />} />
      </Routes>
    </Router>
  );
}

export default App;
