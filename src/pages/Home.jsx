import { useNavigate } from 'react-router-dom';
import './Home.css'
import { MdOutlineMovieFilter } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";

function Home() {
    const navigate = useNavigate()
    return (
        <div className='about-container'>
            <h1 className="text-center my-3">Welcome to pop movies !  </h1>
            <h5 className='text-center'>WATCH ANYWHERE , HERE YOUR FAVORITES.</h5>
            <button className="go-movies "
                onClick={() => navigate("/moveis")}
            >
                <MdOutlineMovieFilter size={25} className='me-2' />
                Explore Movies
                <GrFormNextLink size={25} />
            </button>
        </div>
    );
}

export default Home;