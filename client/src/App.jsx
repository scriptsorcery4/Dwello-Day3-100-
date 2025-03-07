import About from "./components/About"
import Benefit from "./components/Benefit"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Residences from "./components/Residences"
import Stats from "./components/Stats"

function App() {
  
  return (
   <div className="overflow-hidden">
    <Header/>
    <Hero/>
    <Benefit/>
    <Stats/>
    <Residences/>
    <About/>
    <CTA/>
    <Footer/>
   </div>
  )
}

export default App
