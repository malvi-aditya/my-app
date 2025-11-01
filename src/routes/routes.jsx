import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/HomeContents/Home'
import Navbar from '../components/Navbar'
import Experiments from '../components/Experiments/Experiments'
import Playground from '../components/Playground/Playground'
import Notes from '../components/Notes/Notes'
// import ImageCaption from "../components/ImageComponents/ImageCaption";

export default function AppRoutes () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/experiments' element={<Experiments />} />
        <Route path='/playground' element={<Playground />} />
        {/* <Route path="/model" element={<ImageCaption />} /> */}
      </Routes>
    </Router>
  )
}
