import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import Jattari from "./pages/Jattari";
import Amenities from "./pages/Amenities";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import BookSiteVisit from "./pages/BookSiteVisit";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
    
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