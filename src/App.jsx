import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";

// importing pages 
import About from "./Components/Pages/About"
import Work from "./Components/Pages/Work"
import Contact from "./Components/Pages/Contact"
import Credentials from "./Components/Pages/Credentials"
import Projects from "./Components/Pages/Projects"
import Footer from "./Components/Footer/Footer";

// importing amination component
import Fade from "./Components/Animation/Fade";
 function App() {
  return (
    <>
    <Fade duration={500}>
      <div className="container xl:w-[80%] w-full mx-auto">

        <Router>
          <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/works" element={<Work />}/>
              <Route exact path="/contact" element={<Contact />}/>
              <Route exact path="/credentials" element={<Credentials />}/>
              <Route exact path="/projects" element={<Projects />}/>
            </Routes>
          <Footer />
        </Router>
      </div>
      </Fade>
    </>
  );
}

export default App;
