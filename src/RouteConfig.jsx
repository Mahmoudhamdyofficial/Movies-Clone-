import { createBrowserRouter } from 'react-router-dom';
import Movies from './pages/movies'
import Notfound from './components/notfound'
import Singlemovie from './pages/singlemovie'
import Login from './pages/login/login'
import Applayout from './components/applayout/applayout';
import Favmovies from './pages/favmovies';
import Home from './pages/home';

export const Router = createBrowserRouter([
    {
        path: '/', element: <Applayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/Login', element: <Login /> },
            { path: "/favorites", element: <Favmovies /> },
            { path: '/moveis', element: <Movies /> },
            { path: '/single/:id', element: <Singlemovie /> },
            { path: '*', element: <Notfound /> }
        ]
    },
]);