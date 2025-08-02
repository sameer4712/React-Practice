import MovieCard from "../components/movieCard"
import { useState } from "react"


function Home() {

    const [search, searchUpdate] = useState("")

    const movies = [
        { _id: 1, title: "John Wick", release_date: "2014" },
        { _id: 2, title: "Angry Bird", release_date: "2011" },
        { _id: 3, title: "John The Devil", release_date: "2004" },
        { _id: 4, title: "Titanic", release_date: "1993" },
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
                            <MovieCard movie={movie} key={movie.id}
                            />)
                )}
            </div>
        </div>
    );
}

export default Home