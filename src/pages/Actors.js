import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js"

function Actors() {
 
  const [actors, setActors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then(data => setActors(data))
      .catch(error => console.error(error));
  }, []);
  
  const actorsList = actors?.map(actor => {
    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          {actor?.movies?.map(movie => {
            return <li key={movie}>{movie}</li>
          })}
        </ul>
      </article>)
  });
 
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorsList}
      </main>
    </>
  );
};

export default Actors;
