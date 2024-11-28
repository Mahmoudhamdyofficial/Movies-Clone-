import { createBrowserRouter } from 'react-router-dom';
import Movies from './pages/movies'
import Notfound from './components/notfound'
import Singlemovie from './pages/singlemovie'
import Applayout from './components/applayout/applayout';
import Favmovies from './pages/favmovies';
import Home from './pages/Home';

export const Router = createBrowserRouter([
    {
        path: '/', element: <Applayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/favorites", element: <Favmovies /> },
            { path: '/moveis', element: <Movies /> },
            { path: '/single/:id', element: <Singlemovie /> },
            { path: '*', element: <Notfound /> }
        ]
    },
]);