import "./index.css"
// import Home from "./pages/Home"
// import { Routes, Route } from "react-router-dom"
// import Fav from "./pages/Favorites.jsx"
// import NavBar from "./components/NavBar.jsx"
import ToDoList from "../ToDoList.jsx"
// import MovieCard from "./components/movieCard.jsx"
import Exam from "../exam.jsx"

function App() {
  return (
    <div>
       {/* <NavBar/> */}
       <ToDoList />
    {/* <main className="main-content">
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/favorites" element={<Fav />} />
      </Routes>
    </main> */}
    <Exam/>
    <Exam />
    </div>
  )
}
export default App
