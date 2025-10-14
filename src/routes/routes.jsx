import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/HomeContents/Home";
import Navbar from "../components/Navbar";
// import ImageCaption from "../components/ImageComponents/ImageCaption";

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/model" element={<ImageCaption />} /> */}
      </Routes>
    </Router>
  );
}
