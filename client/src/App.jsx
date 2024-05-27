import Benefit from "./components/Benefit"
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
   </div>
  )
}

export default App
