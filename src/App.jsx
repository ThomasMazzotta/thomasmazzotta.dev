import "./App.css"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="min-h-screen w-full ">
      <Navbar />
      <div className="page relative min-h-screen w-full max-w-3xl mx-auto lg:rotate-2 lg:mt-10 ">
        <Home />
      </div>
      <div className="page relative min-h-screen w-full max-w-3xl mx-auto lg:my-10 lg:-rotate-2 ">
        <Home />
      </div>
    </div>
  )
}

export default App
