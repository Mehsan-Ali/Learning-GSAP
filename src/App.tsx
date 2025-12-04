import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import GsapFrom from './pages/GsapFrom'
import GsapTo from './pages/GsapTo'
import Home from './pages/Home'
import GsapTimeline from './pages/GsapTimeline'
import GsapFromTo from './pages/GsapFromTo'

function App() {

  return (
    <>
      <div className="bg-black min-h-screen w-full">
        <Router>
          <Routes>
            <Route path="/gsapto" element={<GsapTo />} />
            <Route path="/gsapfrom" element={<GsapFrom />} />
            <Route path="/gsapfromto" element={<GsapFromTo />} />
            <Route path="/gsaptimeline" element={<GsapTimeline />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
