import { createBrowserRouter } from 'react-router-dom';
import { Error } from './pages/Error';
import { Layout } from './pages/Layout';
import { Movies } from './pages/Movies';
import { Movie } from './components/Movie';
import { fetchMovie } from './fetchMovie';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [

            {
                index: true,
                element: <Movies />,
                // loader: fetchMovie
            },
            {
                path: '/movies/:movieId',
                element: <Movie />,
                loader: fetchMovie
            }
        ]
    }
])