import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { makeFavorite, removeMovie } from "../store/slice/favmovie"
import { FaHeart } from "react-icons/fa";
import './movies.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


function Movies() {
    var [page, setpage] = useState(1)
    const dispatch = useDispatch();
    const fav = useSelector((state) => state.favorites.favorite || []);
    console.log(fav);

    function toggleFavorite(movie) {
        const isFavorite = fav.some(item => item.id == movie.id)
        if (isFavorite) {
            dispatch(removeMovie(movie.id))
        } else {
            dispatch(makeFavorite(movie))
        }
    }

    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=bc404ca14c91268e32ba693218338af5`, { params: { page: page.toString() } })
            .then((res) => {
                console.log(res.data);
                setMovies(res.data.results)

            })
            .catch((e) => {
                console.log(e);

            })
    }, []);
    // const fetching = () => {
    //     fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=bc404ca14c91268e32ba693218338af5")
    //         .then((res) => res.json())
    //         .then((res) => setMovies(res.results))

    // }
    // useEffect(() => {
    //     fetching()
    // }, [])
    // console.log(movies);
    function goDetails(id) {
        navigate(`/single/${id}`)
    };
    function nextPage() {
        setpage(++page)
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=bc404ca14c91268e32ba693218338af5`, { params: { page: page.toString() } })
            .then((res) => {
                console.log(res.data);
                setMovies(res.data.results)

            })
            .catch((e) => {
                console.log(e);

            })
    }
    function prevPage() {
        setpage(--page)
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=bc404ca14c91268e32ba693218338af5`, { params: { page: page.toString() } })
            .then((res) => {
                console.log(res.data);
                setMovies(res.data.results)

            })
            .catch((e) => {
                console.log(e);

            })
    }

    return (

        <>
            <Container fluid
                style={{ background: "rgb(60, 61, 55)" }}
            >
                <Row xs={1} md={5} className="g-4">
                    {movies.map((movie) => {
                        const isFavorite = fav.some(item => item.id == movie.id)


                        return (

                            <Col key={movie.id}>
                                <Card className="bg-dark text-light hover-card" id="click" >
                                    <Card.Img onClick={() => { goDetails(movie.id) }} variant="top" src={`https://image.tmdb.org/t/p/original${movie.poster_path
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
                <div className="row justify-content-center mt-3">
                    <div id="click" className="col-1"><MdKeyboardDoubleArrowLeft className="fs-3" onClick={prevPage} style={{ color: "ECDFCC" }} /></div>
                    <div id="click" className="col-1">< MdKeyboardDoubleArrowRight className="fs-3" onClick={nextPage} style={{ color: "ECDFCC" }} /></div>
                </div>
            </Container>
        </>
    );
}
export default Movies;