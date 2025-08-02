import "./index.css"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Fav from "./pages/Favorites.jsx"
import NavBar from "./components/NavBar.jsx"

d;klgujh[pmkoi]
function App() {
  return (
    <div>
       <NavBar/>
    <main className="main-content">
      <Routes>
       
        < Route path="/" element={<Home />} />
        < Route path="/favorites" element={<Fav />} />
      </Routes>
    </main>
    </div>
  )
}
export default App
