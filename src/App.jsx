import "./App.css"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import CustomCursor from "./components/animations/CustomCursor"

function App() {
  return (
    <div className="min-h-screen w-full cursor">
      <CustomCursor />
      <Navbar />
      <div className="page relative min-h-screen w-full max-w-3xl mx-auto md:rotate-2 md:mt-10 ">
        <Home />
      </div>
      <div className="page relative min-h-screen w-full max-w-3xl mx-auto md:my-10 md:-rotate-2 ">
        <Home />
      </div>
    </div>
  )
}

export default App
