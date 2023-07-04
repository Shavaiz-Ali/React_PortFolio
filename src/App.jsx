import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css";
import { AboutCard } from "./Components/Home/Hero/Hero1/aboutCard";
import { Navbar } from "./Components/Home/Navbar/Navbar";

// importing pages 
import About from "./Components/Pages/About"
import Work from "./Components/Pages/Work"
import Contact from "./Components/Pages/Contact"
import Credentials from "./Components/Pages/Credentials"
import Projects from "./Components/Pages/Projects"
 function App() {
  return (
    <>
      <div className="container mx-auto">

        <Router>
          <Navbar />
            <Routes>
              <Route exact path="/" element={<AboutCard />}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/works" element={<Work />}/>
              <Route exact path="/contact" element={<Contact />}/>
              <Route exact path="/credentials" element={<Credentials />}/>
              <Route exact path="/projects" element={<Projects />}/>
            </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
