import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import  NavBar  from "./components/NavBar";
import Banner from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills"
import Projects  from "./components/Projects";
//import { Projects } from "./components/Projects";
import  Contact  from "./components/Contact";
import  Footer  from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
