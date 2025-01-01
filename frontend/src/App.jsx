import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Mechanical from "./pages/departments/Mechanical";
import Department from "./pages/departments/Department";
import People from "./pages/People";
import Civil from "./pages/departments/Civil";
import EEE from "./pages/departments/EEE";
import ECE from "./pages/departments/ECE";
import CSE from "./pages/departments/CSE";
import Architecture from "./pages/departments/Architecture";
import Faculty from "./pages/Faculty";
import Students from "./pages/Students";
import Infrastructure from "./pages/Infrastructure";
import Library from "./pages/Library";
import Placements from "./pages/Placements";
import Alumini from "./pages/Alumini";
import Careers from "./pages/Careers";
import Notifications from "./pages/Notifications";
import AcademicsUvce from "./pages/AcademicsUvce";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/department" element={<Department />}>
          <Route path="Mechanical" element={<Mechanical />} />
          <Route path="Civil" element={<Civil />} />
          <Route path="EEE" element={<EEE />} />
          <Route path="ECE" element={<ECE />} />
          <Route path="CSE" element={<CSE />} />
          <Route path="Architecture" element={<Architecture />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<AcademicsUvce />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/library" element={<Library />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
