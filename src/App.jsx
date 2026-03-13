import Home from "./components/Home"
import Navbar from "./components/Navbar"
import CustomCursor from "./components/animations/CustomCursor"
import About from "./components/About"

function App() {
  return (
    <div className="min-h-screen w-full cursor">
      <CustomCursor />
      <Navbar />
      <div className="page relative min-h-screen w-full max-w-3xl mx-auto md:rotate-2 md:mt-10 ">
        <Home />
      </div>
      <div className="page relative min-h-screen w-full max-w-3xl mx-auto md:my-10 md:-rotate-2 mt-10">
        <About />
      </div>
    </div>
  )
}

export default App
