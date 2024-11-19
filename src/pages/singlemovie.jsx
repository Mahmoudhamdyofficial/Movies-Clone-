import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './singlemovie.css'

function Singlemovie() {
    let { id } = useParams();
    const [movie, setmovie] = useState({});
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}popular?language=en-US&page=1&api_key=bc404ca14c91268e32ba693218338af5`)
            .then((res) => {
                console.log(res.data);
                setmovie(res.data)

            })
            .catch((e) => {
                console.log(e);

            })
    }, [id]);
    return (
        <>

            <div className="movie-container" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.75)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}>
                <div className="poster-section ms-5">
                    <img className=" rounded-4 mt-3"
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>
                <div className="details-section" >
                    <div className="details-overlay"></div> {/* Dark overlay for better text readability */}
                    <div className="details-content">
                        <h1>{movie.title} <span>({new Date(movie.release_date).getFullYear()})</span></h1>
                        <p className="movie-info">{movie.release_date} | {movie.genres && movie.genres.map(genre => genre.name).join(", ")} | {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</p>
                        <div className="user-score">
                            <div className="score-circle">  {movie.vote_average ? `${movie.vote_average.toFixed(1)} ` : "N/A"} </div>
                            <p className="mt-3">Users Rating</p>
                        </div>
                        <button className="trailer-btn">Play Trailer</button>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Singlemovie;