import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/home";
import Projects from "./pages/project";
import Jattari from "./pages/Jattari";
import Amenities from "./pages/Amenities";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import BookSiteVisit from "./pages/BookSiteVisit";


function App() {
  return (
    <BrowserRouter>
    
      <Routes>

           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/jattari" element={<Jattari />} />
           <Route path="/amenities" element={<Amenities />} />
           <Route path="/location" element={<Location />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/BookSiteVisit" element={<BookSiteVisit />} />

          
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;