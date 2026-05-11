import Navbar from "../src/components/Navbar"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "../src/pages/Home"
import Menu from "../src/pages/Menu"
import About from "../src/pages/About"
import Contact from "../src/pages/Contact"
import Footer from "./components/Footer"
function App() {

  return (
   <div className="App">
    <Router>
       <Navbar />
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={< Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

       </Routes>
       <Footer />
    </Router>
   
   </div>
  )
}

export default App
