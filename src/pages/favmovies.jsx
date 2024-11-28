import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector, useDispatch } from 'react-redux';
import { makeFavorite, removeMovie } from "../store/slice/favmovie"
import { FaHeart } from "react-icons/fa";
import './favmovies.css'
import { useNavigate } from "react-router-dom";

function Favmovies() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favmovies = useSelector((state) => state.favorites.favorite || []);
    console.log(favmovies);
    function toggleFavorite(movie) {
        const isFavorite = favmovies.some(item => item.id == movie.id)
        if (isFavorite) {
            dispatch(removeMovie(movie.id))
        } else {
            dispatch(makeFavorite(movie))
        }
    }

    return (

        favmovies.length ? <>
            <Container fluid className="container-fav"
            // style={{ background: "rgb(60, 61, 55)" }}
            >
                <Row xs={1} md={4} className="g-4">
                    {favmovies.map((movie) => {
                        const isFavorite = favmovies.some(item => item.id == movie.id)

                        return (


                            <Col key={movie.id}>
                                <Card className="bg-dark text-light hover-card" id="click" >
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${movie.poster_path
                                        }`} className="img-fluid" />
                                    <Card.Body style={{ height: "18vh" }} className="d-flex flex-column" >

                                        <h6 className="text-truncate ">{movie.title}</h6>
                                        <div className="row">
                                            <div className="col-9">
                                                <p style={{ color: 'rgb(242, 97, 63)' }} className=" mt-auto">Rate: {movie.vote_average.toFixed(1)}</p>
                                            </div>
                                            <div className="col-3">
                                                <FaHeart id="click" onClick={() => toggleFavorite(movie)} style={{ color: isFavorite ? "red" : "gray" }} className="fs-3" />
                                            </div>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </> : <div className=" container-fluid no-fav">
            <div className="content">
                <p className="text-white text-center fs-3 d-block">You have no favorite movies yet! Browse and add some to your favorites</p>
                <button className="btn-movies"
                    onClick={() => navigate("/moveis")}
                >
                    Go to Movies
                </button>
            </div>
        </div>
    );
}

export default Favmovies;