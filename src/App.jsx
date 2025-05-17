import LeftBar from "./components/LeftBar"
import Navbar from "./components/Navbar"
import RightSideBar from "./components/RightSideBar"


function App() {

  return (
  <div className='container mx-auto px-4 h-screen flex flex-col'>
    <Navbar/>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <LeftBar/>
      <RightSideBar/>
    </div>
  </div>
  )
}

export default App
