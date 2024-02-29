import {Link} from 'react-router-dom';

function MovieCard({ title, id }) {

  return (
    <article>
        <h2>{title}</h2>
        <span><Link to={`../movie/${id}`}>View Info</Link></span>
    </article>
  );
};

export default MovieCard;