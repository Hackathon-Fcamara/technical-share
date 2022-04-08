import { Route } from "react-router-dom";
import { PageHome } from "./components/PageHome";
import { PageLogin } from "./components/PageLogin";
import { PageMentor } from "./components/PageMentor";
import { PageSchedule } from "./components/PageSchedule";
import { PageFindMentor } from "./components/PageFindMentor";

// STYLES
import "./global/reset.css";

function App() {
  return (
    <>
      <Route path="/home">
        <PageHome />
      </Route>
      <Route path="/login">
        <PageLogin />
      </Route>
      <Route path="/findMentor">
        <PageFindMentor />
      </Route>
      <Route path="/schedule">
        <PageSchedule />
      </Route>
      <Route path="/mentor">
        <PageMentor />
      </Route>
    </>
  );
}

export default App;
