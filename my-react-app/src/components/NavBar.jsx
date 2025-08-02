import { Link } from "react-router-dom"

function NavBar(){
    return(
        <nav className="nav">
            <div className="title">
                <Link to="/">Movie App</Link>
            </div>
            <div className="back">
                <Link to="/" >Home</Link>
                <Link to="/favorites" >favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar