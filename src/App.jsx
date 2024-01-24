import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact Component={Homepage} />
          <Route path="/contact" exact Component={Contact} />
          <Route path="/about" exact Component={About} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
