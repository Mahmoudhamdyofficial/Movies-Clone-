import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "./header.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from "../store/slice/language";
import { BiMoviePlay } from "react-icons/bi";
import { Badge } from 'react-bootstrap';


function Header() {
    const dispatch = useDispatch();
    const Lang = useSelector((state) => { return state.language.language });
    console.log(Lang);
    const changeSiteLang = () => {
        dispatch(changeLanguage(Lang == "en" ? "ar" : "en"))
    }
    const favmovies = useSelector((state) => state.favorites.favorite || []);

    return (

        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home" className='mt-0 pt-0'> <BiMoviePlay />
                    <p className='d-inline'> pop movies</p>
                    {/* {Lang} */}
                </Navbar.Brand>
                <Nav className="me-auto">

                    <NavLink className={({ isActive }) => (isActive ? "active" : "navlink")} to={"/"}>{Lang == "en" ? "Home" : "الرئيسية"}</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "navlink")} to={"/moveis"}>{Lang == "en" ? "Movies" : "الافلام"}</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "navlink")} to={"/favorites"}>{Lang == "en" ? "favorites" : "المفضلة"} <Badge bg="secondary" pill>
                        {favmovies.length}
                    </Badge></NavLink>

                    <button id='lang' onClick={changeSiteLang}>{Lang == "en" ? "عربى" : "english"}</button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;