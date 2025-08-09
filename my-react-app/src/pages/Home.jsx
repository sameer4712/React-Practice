import MovieCard from "../components/movieCard"
import { useState } from "react"
import seven from './../assets/seven.webp'
import fightClub from './../assets/fight club.webp'
import titanic from './../assets/titanic.webp'
import lionking from './../assets/the lion king.jpg'


function Home() {

    const [search, searchUpdate] = useState("")

    const movies = [
        { _id: 1, title: "John Wick", release_date: "2014",image:seven },
        { _id: 2, title: "Angry Bird", release_date: "2011",image:fightClub},
        { _id: 3, title: "John The Devil", release_date: "2004",image:lionking},
        { _id: 4, title: "Titanic", release_date: "1993",image:titanic },
    ]
    function handleSearch(e) {
        e.preventDefault()
        alert(search)
    }
    return (
        
        <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="search for movies..." className="search"
                    value={search} onChange={(e) => searchUpdate(e.target.value)} />
                <button className="button-search"> Search</button>
            </form>
                
            <div className="movie-grid" >
                {movies.map(
                    (movie) =>
                        movie.title.toLowerCase().startsWith(search) &&
                        (
                            <MovieCard movie={movie} key={movie._id}
                            />)
                )}
            </div>
        </div>
    );
}

export default Home