import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js"
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState([])
  const params = useParams();
  const movieId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(r => r.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, []);

  const genresMapped = movie.genres?.map((genre) => {
    return <span key={genre}>{genre}</span>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {genresMapped}
      </main>
    </>
  );
};

export default Movie;
