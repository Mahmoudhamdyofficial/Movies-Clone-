import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {
    const navigate = useNavigate()
    return (
        <div className='about-container'>
            <h2 className="text-center my-3">Welcome to pop movies !  </h2> <h4>
                Enjoy now the best exclusive movies <br /> only at the number one movie website </h4>
            <button className="go-movies "
                onClick={() => navigate("/moveis")}
            >
                Go to Movies
            </button>
        </div>
    );
}

export default Home;